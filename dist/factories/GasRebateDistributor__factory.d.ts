import { Signer, ContractFactory, BytesLike, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GasRebateDistributor, GasRebateDistributorInterface } from "../GasRebateDistributor";
declare type GasRebateDistributorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasRebateDistributor__factory extends ContractFactory {
    constructor(...args: GasRebateDistributorConstructorParams);
    deploy(owner_: PromiseOrValue<string>, merkleRoot_: PromiseOrValue<BytesLike>, deadline: PromiseOrValue<BigNumberish>, tokenAddress_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasRebateDistributor>;
    getDeployTransaction(owner_: PromiseOrValue<string>, merkleRoot_: PromiseOrValue<BytesLike>, deadline: PromiseOrValue<BigNumberish>, tokenAddress_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasRebateDistributor;
    connect(signer: Signer): GasRebateDistributor__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161147338038061147383398101604081905261002f916100a3565b600080546001600160a01b039586166001600160a01b0319918216179091556001805460ff60a01b1916815560029490945560059290925560068054919094169116179091556004805460ff191690911790556100e9565b80516001600160a01b038116811461009e57600080fd5b919050565b600080600080608085870312156100b957600080fd5b6100c285610087565b935060208501519250604085015191506100de60608601610087565b905092959194509250565b61137b806100f86000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063783399841161008c578063b33712c511610066578063b33712c5146101e7578063c2ce7232146101ef578063e30c397814610202578063f2fde38b1461022257600080fd5b8063783399841461016f5780638da5cb5b146101825780639d76ea58146101c757600080fd5b80633ba86c44116100c85780633ba86c4414610128578063439766ce146101315780635c975abb146101395780637200b8291461016757600080fd5b806323452b9c146100ef5780632eb4a7ab146100f95780632f52ebb714610115575b600080fd5b6100f7610235565b005b61010260025481565b6040519081526020015b60405180910390f35b6100f76101233660046110b4565b6102ff565b61010260055481565b6100f7610502565b60015474010000000000000000000000000000000000000000900460ff16604051901515815260200161010c565b6100f761055d565b6100f761017d366004611129565b610643565b6000546101a29073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010c565b6006546101a29073ffffffffffffffffffffffffffffffffffffffff1681565b6100f761070f565b6100f76101fd36600461115e565b610768565b6001546101a29073ffffffffffffffffffffffffffffffffffffffff1681565b6100f76102303660046111a9565b6108c7565b60005473ffffffffffffffffffffffffffffffffffffffff163314610286576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166102d5576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b610307610a25565b6004543360009081526003602052604090205460ff918216911603610358576040517f646cf55800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600554421115610394576040517fc4560cae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003360601b16602082015260348101849052600090605401604051602081830303815290604052805190602001209050610428838380806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506002549150849050610aaf565b61045e576040517f09bde33900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60045433600081815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff909316929092179091556006546104c79173ffffffffffffffffffffffffffffffffffffffff919091169086610ac5565b60405184815233907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a9060200160405180910390a250505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610553576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055b610b57565b565b60015473ffffffffffffffffffffffffffffffffffffffff163381146105af576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610694576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002839055600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831617905560058290556004805460ff169060006106f1836111f3565b91906101000a81548160ff021916908360ff16021790555050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610760576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055b610bf0565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107b9576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107c1610a25565b60005b828110156108c15760008484838181106107e0576107e0611212565b90506020020160208101906107f591906111a9565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa158015610861573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108859190611241565b90506108b885858481811061089c5761089c611212565b90506020020160208101906108b191906111a9565b8483610ac5565b506001016107c4565b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610918576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610965576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036109b4576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60015474010000000000000000000000000000000000000000900460ff161561055b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064015b60405180910390fd5b600082610abc8584610c47565b14949350505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052610b52908490610c94565b505050565b610b5f610a25565b600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610bc63390565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b610bf8610da3565b600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33610bc6565b600081815b8451811015610c8c57610c7882868381518110610c6b57610c6b611212565b6020026020010151610e27565b915080610c848161125a565b915050610c4c565b509392505050565b6000610cf6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610e599092919063ffffffff16565b9050805160001480610d17575080806020019051810190610d179190611292565b610b52576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610aa6565b60015474010000000000000000000000000000000000000000900460ff1661055b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610aa6565b6000818310610e43576000828152602084905260409020610e52565b60008381526020839052604090205b9392505050565b6060610e688484600085610e70565b949350505050565b606082471015610f02576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610aa6565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610f2b91906112d8565b60006040518083038185875af1925050503d8060008114610f68576040519150601f19603f3d011682016040523d82523d6000602084013e610f6d565b606091505b5091509150610f7e87838387610f89565b979650505050505050565b6060831561101f5782516000036110185773ffffffffffffffffffffffffffffffffffffffff85163b611018576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610aa6565b5081610e68565b610e6883838151156110345781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa691906112f4565b60008083601f84011261107a57600080fd5b50813567ffffffffffffffff81111561109257600080fd5b6020830191508360208260051b85010111156110ad57600080fd5b9250929050565b6000806000604084860312156110c957600080fd5b83359250602084013567ffffffffffffffff8111156110e757600080fd5b6110f386828701611068565b9497909650939450505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461112457600080fd5b919050565b60008060006060848603121561113e57600080fd5b833592506020840135915061115560408501611100565b90509250925092565b60008060006040848603121561117357600080fd5b833567ffffffffffffffff81111561118a57600080fd5b61119686828701611068565b9094509250611155905060208501611100565b6000602082840312156111bb57600080fd5b610e5282611100565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060ff821660ff8103611209576112096111c4565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561125357600080fd5b5051919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361128b5761128b6111c4565b5060010190565b6000602082840312156112a457600080fd5b81518015158114610e5257600080fd5b60005b838110156112cf5781810151838201526020016112b7565b50506000910152565b600082516112ea8184602087016112b4565b9190910192915050565b60208152600082518060208401526113138160408501602087016112b4565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220d9290c8574bae9460fb5b31200f1e384d8edbb7366019d44aef7116bd13837b664736f6c63430008110033";
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
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "tokenAddress_";
            readonly type: "address";
            readonly internalType: "address";
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
        readonly name: "claimDeadline";
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
        readonly name: "pauseContract";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "paused";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly name: "tokenAddress";
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
        readonly name: "unpauseContract";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateMerkleRoot";
        readonly inputs: readonly [{
            readonly name: "merkleRoot_";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "tokenAddress_";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdrawUnclaimed";
        readonly inputs: readonly [{
            readonly name: "tokenAddresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
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
        readonly type: "event";
        readonly name: "Paused";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Unpaused";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: false;
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
