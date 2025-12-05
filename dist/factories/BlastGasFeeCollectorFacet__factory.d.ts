import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { BlastGasFeeCollectorFacet, BlastGasFeeCollectorFacetInterface } from "../BlastGasFeeCollectorFacet";
type BlastGasFeeCollectorFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BlastGasFeeCollectorFacet__factory extends ContractFactory {
    constructor(...args: BlastGasFeeCollectorFacetConstructorParams);
    deploy(_gasFeeRecipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<BlastGasFeeCollectorFacet>;
    getDeployTransaction(_gasFeeRecipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): BlastGasFeeCollectorFacet;
    connect(signer: Signer): BlastGasFeeCollectorFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161042c38038061042c83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516103746100b85f395f81816053015281816101b7015261024101526103745ff3fe608060405234801561000f575f5ffd5b506004361061004a575f3560e01c80632f58407e1461004e5780638c13c57b1461009e57806397d75776146100a8578063a8bfb78f146100c3575b5f5ffd5b6100757f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a66100cb565b005b61007573430000000000000000000000000000000000000281565b6100a661016c565b6100d36102b2565b73430000000000000000000000000000000000000273ffffffffffffffffffffffffffffffffffffffff16634e606c476040518163ffffffff1660e01b81526004015f604051808303815f87803b15801561012c575f5ffd5b505af115801561013e573d5f5f3e3d5ffd5b50506040517fb9c95007ee5bbddde2b114567aab860048ccd45d5c5b8c499d0342abef3d45fa92505f9150a1565b6101746102b2565b6040517f954fa5ee00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660248201525f907343000000000000000000000000000000000000029063954fa5ee906044016020604051808303815f875af1158015610219573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061023d9190610327565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff167f8c2d4c22d484d397cc360f94f539b0ba8c5081feece9682efda1fc8a2ba84342826040516102a791815260200190565b60405180910390a250565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610325576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f60208284031215610337575f5ffd5b505191905056fea26469706673582212201ccca4f3edc8e2b135cc1e7a9d50cea64c92e3671436f8f10833fd1f6d170a2a64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gasFeeRecipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "BLAST";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IBlast";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "GAS_FEE_RECIPIENT";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "claimGasFees";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "configureGasMode";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "GasFeesClaimed";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "GasModeConfigured";
        readonly inputs: readonly [];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }];
    static createInterface(): BlastGasFeeCollectorFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BlastGasFeeCollectorFacet;
}
export {};
