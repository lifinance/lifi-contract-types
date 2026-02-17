import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { AnotherContract, AnotherContractInterface } from "../../TestViolationsEvents.sol/AnotherContract";
type AnotherContractConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AnotherContract__factory extends ContractFactory {
    constructor(...args: AnotherContractConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AnotherContract>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AnotherContract;
    connect(signer: Signer): AnotherContract__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5060ab80601a5f395ff3fe6080604052348015600e575f5ffd5b50600436106026575f3560e01c80638a4068dd14602a575b5f5ffd5b60306032565b005b60408051600181526002602082015260648183015290517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360600190a156fea26469706673582212205f7be61df9d64e9b06f98be4b9bb6a0a0724c5379b7727c7b895d9ff51149d8f64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "transfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "Transfer";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): AnotherContractInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AnotherContract;
}
export {};
