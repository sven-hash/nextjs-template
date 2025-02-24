/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  SubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as TokenFaucetContractJson } from "../token.ral.json";

// Custom types for the contract
export namespace TokenFaucetTypes {
  export type Fields = {
    symbol: HexString;
    name: HexString;
    decimals: bigint;
    supply: bigint;
    balance: bigint;
  };

  export type State = ContractState<Fields>;

  export type WithdrawEvent = ContractEvent<{ to: HexString; amount: bigint }>;

  export interface CallMethodTable {
    getSymbol: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getName: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getDecimals: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getTotalSupply: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    balance: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<
  TokenFaucetInstance,
  TokenFaucetTypes.Fields
> {
  at(address: string): TokenFaucetInstance {
    return new TokenFaucetInstance(address);
  }

  tests = {
    getSymbol: async (
      params: Omit<
        TestContractParams<TokenFaucetTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getSymbol", params);
    },
    getName: async (
      params: Omit<
        TestContractParams<TokenFaucetTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getName", params);
    },
    getDecimals: async (
      params: Omit<
        TestContractParams<TokenFaucetTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getDecimals", params);
    },
    getTotalSupply: async (
      params: Omit<
        TestContractParams<TokenFaucetTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getTotalSupply", params);
    },
    balance: async (
      params: Omit<
        TestContractParams<TokenFaucetTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "balance", params);
    },
    withdraw: async (
      params: TestContractParams<TokenFaucetTypes.Fields, { amount: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "withdraw", params);
    },
  };
}

// Use this object to test and deploy the contract
export const TokenFaucet = new Factory(
  Contract.fromJson(
    TokenFaucetContractJson,
    "=20-2+67=101+3a0007e02=1+75468652063757272656e742062616c616e63652069732000=46",
    "a3309aa3a0dbd0c53b67a0c422316dcbc0571d8fa5f9ea2ab374b5c110f4efe2"
  )
);

// Use this class to interact with the blockchain
export class TokenFaucetInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<TokenFaucetTypes.State> {
    return fetchContractState(TokenFaucet, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeWithdrawEvent(
    options: SubscribeOptions<TokenFaucetTypes.WithdrawEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      TokenFaucet.contract,
      this,
      options,
      "Withdraw",
      fromCount
    );
  }

  methods = {
    getSymbol: async (
      params?: TokenFaucetTypes.CallMethodParams<"getSymbol">
    ): Promise<TokenFaucetTypes.CallMethodResult<"getSymbol">> => {
      return callMethod(
        TokenFaucet,
        this,
        "getSymbol",
        params === undefined ? {} : params
      );
    },
    getName: async (
      params?: TokenFaucetTypes.CallMethodParams<"getName">
    ): Promise<TokenFaucetTypes.CallMethodResult<"getName">> => {
      return callMethod(
        TokenFaucet,
        this,
        "getName",
        params === undefined ? {} : params
      );
    },
    getDecimals: async (
      params?: TokenFaucetTypes.CallMethodParams<"getDecimals">
    ): Promise<TokenFaucetTypes.CallMethodResult<"getDecimals">> => {
      return callMethod(
        TokenFaucet,
        this,
        "getDecimals",
        params === undefined ? {} : params
      );
    },
    getTotalSupply: async (
      params?: TokenFaucetTypes.CallMethodParams<"getTotalSupply">
    ): Promise<TokenFaucetTypes.CallMethodResult<"getTotalSupply">> => {
      return callMethod(
        TokenFaucet,
        this,
        "getTotalSupply",
        params === undefined ? {} : params
      );
    },
    balance: async (
      params?: TokenFaucetTypes.CallMethodParams<"balance">
    ): Promise<TokenFaucetTypes.CallMethodResult<"balance">> => {
      return callMethod(
        TokenFaucet,
        this,
        "balance",
        params === undefined ? {} : params
      );
    },
  };

  async multicall<Calls extends TokenFaucetTypes.MultiCallParams>(
    calls: Calls
  ): Promise<TokenFaucetTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      TokenFaucet,
      this,
      calls
    )) as TokenFaucetTypes.MultiCallResults<Calls>;
  }
}
