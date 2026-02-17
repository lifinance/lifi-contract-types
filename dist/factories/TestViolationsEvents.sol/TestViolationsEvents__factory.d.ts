import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TestViolationsEvents, TestViolationsEventsInterface } from "../../TestViolationsEvents.sol/TestViolationsEvents";
type TestViolationsEventsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestViolationsEvents__factory extends ContractFactory {
    constructor(...args: TestViolationsEventsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestViolationsEvents>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestViolationsEvents;
    connect(signer: Signer): TestViolationsEvents__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50609e80601a5f395ff3fe6080604052348015600e575f5ffd5b50600436106026575f3560e01c80637b0cb83914602a575b5f5ffd5b60306032565b005b604051607b81527f379340f64b65a8890c7ea4f6d86d2359beaf41080f36a7ea64b78a2c06eee3f09060200160405180910390a156fea264697066735822122044119e7129b7740986d69f7bd08cb38ce178511e1db647191ea5acc96539aa1c64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "emitEvent";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "SomeEvent";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): TestViolationsEventsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestViolationsEvents;
}
export {};
