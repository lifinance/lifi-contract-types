import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { SecurityReviewProbeFacet, SecurityReviewProbeFacetInterface } from "../../SecurityReviewProbeFacet.sol/SecurityReviewProbeFacet";
type SecurityReviewProbeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SecurityReviewProbeFacet__factory extends ContractFactory {
    constructor(...args: SecurityReviewProbeFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SecurityReviewProbeFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SecurityReviewProbeFacet;
    connect(signer: Signer): SecurityReviewProbeFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506102488061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061003f575f3560e01c8063662a591514610043578063dee4004a14610058578063f7d566091461006b575b5f5ffd5b6100566100513660046101d0565b610073565b005b6100566100663660046101d0565b61010e565b61005661014e565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146100c9576040519150601f19603f3d011682016040523d82523d5f602084013e6100ce565b606091505b5050905080610109576040517f549aa36500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b60405173ffffffffffffffffffffffffffffffffffffffff83169082156108fc029083905f818181858888f19350505050158015610109573d5f5f3e3d5ffd5b5f8054604080517fd0e30db0000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff9092169263d0e30db0924792600480820193929182900301818588803b1580156101b7575f5ffd5b505af11580156101c9573d5f5f3e3d5ffd5b5050505050565b5f5f604083850312156101e1575f5ffd5b823573ffffffffffffffffffffffffffffffffffffffff81168114610204575f5ffd5b94602093909301359350505056fea2646970667358221220ecceed1f2ab86ebbabe84e581af4499d87efa65e4745ec9044adf7f5c2a1852164736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "payoutBad";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "payoutGood";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "wrapAllBad";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly name: "ProbeTransferFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): SecurityReviewProbeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SecurityReviewProbeFacet;
}
export {};
