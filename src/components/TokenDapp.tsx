import { FC, useState } from 'react'
import styles from '../styles/Home.module.css'
import { withdrawToken } from '@/services/token.service'
import { TxStatus } from './TxStatus'
import { useAlephiumConnectContext } from '@alephium/web3-react'
import { node } from "@alephium/web3"
import { TokenFaucetConfig } from '@/services/utils'

export const TokenDapp: FC<{
  config: TokenFaucetConfig
}> = ({ config }) => {
  const context = useAlephiumConnectContext()
  const addressGroup = config.groupIndex
  const [withdrawAmount, setWithdrawAmount] = useState('')
  const [ongoingTxId, setOngoingTxId] = useState<string>()

  const handleWithdrawSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!!context.signerProvider) {
      const result = await withdrawToken(context.signerProvider, withdrawAmount, config.faucetTokenId)
      setOngoingTxId(result.txId)
    }
  }

  const txStatusCallback = (status: node.TxStatus, numberOfChecks: number): Promise<any> => {
    if (
      (status.type === 'Confirmed' && numberOfChecks > 2) ||
      (status.type === 'TxNotFound' && numberOfChecks > 3)
    ) {
      setOngoingTxId(undefined)
    }

    return Promise.resolve()
  }

  console.log("ongoing..", ongoingTxId)
  return (
    <>
      {ongoingTxId && <TxStatus txId={ongoingTxId} txStatusCallback={txStatusCallback} />}

      <div className="columns">
        <form onSubmit={handleWithdrawSubmit}>
          <>
            <h2 className={styles.title}>Alephium Token Faucet on {config.network}</h2>
            <p>
              Since current address group is {addressGroup}, only token from {addressGroup} can be withdrawn.
            </p>
            <p>Maximum 2 tokens can be withdrawn at a time.</p>
            <table>
              <thead>
                <tr>
                  <td>id</td>
                  <th>group</th>
                </tr>
              </thead>
              <tbody>
                <tr key={addressGroup} style={{ background: 'red', color: 'white' }}>
                  <td>{config.faucetTokenId}</td>
                  <td>{addressGroup}</td>
                </tr>
              </tbody>
            </table>
            <label htmlFor="withdraw-amount">Amount</label>
            <input
              type="number"
              id="transfer-amount"
              name="amount"
              max="2"
              min="1"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
            />
            <br />
            <input type="submit" disabled={!!ongoingTxId} value="Send Me Token" />
          </>
        </form>
      </div>
    </>
  )
}
