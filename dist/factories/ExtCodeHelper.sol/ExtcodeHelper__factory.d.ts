import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ExtcodeHelper, ExtcodeHelperInterface } from "../../ExtCodeHelper.sol/ExtcodeHelper";
declare type ExtcodeHelperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ExtcodeHelper__factory extends ContractFactory {
    constructor(...args: ExtcodeHelperConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ExtcodeHelper>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ExtcodeHelper;
    connect(signer: Signer): ExtcodeHelper__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506101478061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610029575f3560e01c8063fab46d661461002d575b5f5ffd5b61004061003b3660046100d7565b610091565b604080517fffffff0000000000000000000000000000000000000000000000000000000000909316835273ffffffffffffffffffffffffffffffffffffffff90911660208301520160405180910390f35b6040805160178082528183019092525f918291829160208201818036833701905050905060175f60208301863c6020810180519350600381015160601c92505050915091565b5f602082840312156100e7575f5ffd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461010a575f5ffd5b939250505056fea2646970667358221220b28fce73db745a48ce26c512cff086c704ecd6ccf6443aea5772c3e9abc1a56264736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getDelegationInfo";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "prefix";
            readonly type: "bytes3";
            readonly internalType: "bytes3";
        }, {
            readonly name: "delegate";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): ExtcodeHelperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ExtcodeHelper;
}
export {};
