import { Signer, ContractFactory, BytesLike, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GasRebateDistributor, GasRebateDistributorInterface } from "../GasRebateDistributor";
declare type GasRebateDistributorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasRebateDistributor__factory extends ContractFactory {
    constructor(...args: GasRebateDistributorConstructorParams);
    deploy(owner_: PromiseOrValue<string>, merkleRoot_: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasRebateDistributor>;
    getDeployTransaction(owner_: PromiseOrValue<string>, merkleRoot_: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasRebateDistributor;
    connect(signer: Signer): GasRebateDistributor__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051610b8c380380610b8c83398101604081905261002f91610058565b600080546001600160a01b0319166001600160a01b039390931692909217909155600255610092565b6000806040838503121561006b57600080fd5b82516001600160a01b038116811461008257600080fd5b6020939093015192949293505050565b610aeb806100a16000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80637200b829116100765780638da5cb5b1161005b5780638da5cb5b14610133578063e30c397814610178578063f2fde38b1461019857600080fd5b80637200b829146101225780637caf2c241461012a57600080fd5b806323452b9c116100a757806323452b9c146100eb5780632eb4a7ab146100f35780632f52ebb71461010f57600080fd5b806303c15957146100c35780630fadea30146100d8575b600080fd5b6100d66100d1366004610929565b6101ab565b005b6100d66100e636600461094b565b610236565b6100d66102cf565b6100fc60025481565b6040519081526020015b60405180910390f35b6100d661011d366004610981565b610399565b6100d661056a565b6100fc60055481565b6000546101539073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610106565b6001546101539073ffffffffffffffffffffffffffffffffffffffff1681565b6100d66101a636600461094b565b610650565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101fc576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600282905560058190556004805460ff1690600061021983610a2f565b91906101000a81548160ff021916908360ff160217905550505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610287576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4761029282826107ae565b60408051338152602081018390527fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a910160405180910390a15050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610320576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661036f576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6103a23361084d565b156103d9576040517f646cf55800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600554421115610415576040517fc4560cae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003360601b166020820152603481018490526000906054016040516020818303038152906040528051906020012090506104a9838380806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506002549150849050610894565b6104df576040517f09bde33900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60045433600081815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff9093169290921790915561052b90856107ae565b60408051338152602081018690527fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a910160405180910390a150505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146105bc576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106a1576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166106ee576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361073d576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610808576040519150601f19603f3d011682016040523d82523d6000602084013e61080d565b606091505b5050905080610848576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b60045473ffffffffffffffffffffffffffffffffffffffff8216600090815260036020526040812054909160ff90811691160361088c57506001919050565b506000919050565b6000826108a185846108aa565b14949350505050565b600081815b84518110156108ef576108db828683815181106108ce576108ce610a4e565b60200260200101516108f7565b9150806108e781610a7d565b9150506108af565b509392505050565b6000818310610913576000828152602084905260409020610922565b60008381526020839052604090205b9392505050565b6000806040838503121561093c57600080fd5b50508035926020909101359150565b60006020828403121561095d57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461092257600080fd5b60008060006040848603121561099657600080fd5b83359250602084013567ffffffffffffffff808211156109b557600080fd5b818601915086601f8301126109c957600080fd5b8135818111156109d857600080fd5b8760208260051b85010111156109ed57600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060ff821660ff8103610a4557610a45610a00565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610aae57610aae610a00565b506001019056fea264697066735822122022cb9e5b027239feddd27609e95c75e2ec6807f9c13ae526476f747a5fc7fabc64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "owner_";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "merkleRoot_";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "claim";
        readonly inputs: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "merkleProof";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "claimableUntil";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "merkleRoot";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateMerkleRoot";
        readonly inputs: readonly [{
            readonly name: "newMerkleRoot";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdrawUnclaimed";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "Claimed";
        readonly inputs: readonly [{
            readonly name: "account";
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
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AlreadyClaimed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ClaimDeadlineExpired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidProof";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): GasRebateDistributorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasRebateDistributor;
}
export {};
