import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { BlastGasFeeCollectorFacet, BlastGasFeeCollectorFacetInterface } from "../BlastGasFeeCollectorFacet";
type BlastGasFeeCollectorFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BlastGasFeeCollectorFacet__factory extends ContractFactory {
    constructor(...args: BlastGasFeeCollectorFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<BlastGasFeeCollectorFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): BlastGasFeeCollectorFacet;
    connect(signer: Signer): BlastGasFeeCollectorFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506103958061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061003f575f3560e01c80638c13c57b1461004357806397d757761461004d578063992f9f4b14610091575b5f5ffd5b61004b6100a4565b005b61006873430000000000000000000000000000000000000281565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004b61009f36600461030e565b610145565b6100ac610299565b73430000000000000000000000000000000000000273ffffffffffffffffffffffffffffffffffffffff16634e606c476040518163ffffffff1660e01b81526004015f604051808303815f87803b158015610105575f5ffd5b505af1158015610117573d5f5f3e3d5ffd5b50506040517fb9c95007ee5bbddde2b114567aab860048ccd45d5c5b8c499d0342abef3d45fa92505f9150a1565b61014d610299565b73ffffffffffffffffffffffffffffffffffffffff811661019a576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f954fa5ee00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff821660248201525f907343000000000000000000000000000000000000029063954fa5ee906044016020604051808303815f875af115801561021f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102439190610348565b90508173ffffffffffffffffffffffffffffffffffffffff167f8c2d4c22d484d397cc360f94f539b0ba8c5081feece9682efda1fc8a2ba843428260405161028d91815260200190565b60405180910390a25050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff16331461030c576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f6020828403121561031e575f5ffd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610341575f5ffd5b9392505050565b5f60208284031215610358575f5ffd5b505191905056fea26469706673582212200662a84b102561077e95b7e39d7e3cdf4f907bab2026e0f77db7b7a6d613563c64736f6c634300081d0033";
    static readonly abi: readonly [{
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
        readonly name: "claimGasFees";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
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
