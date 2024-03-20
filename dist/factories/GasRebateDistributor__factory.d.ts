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
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516200174d3803806200174d833981016040819052610031916100a5565b600080546001600160a01b039586166001600160a01b0319918216179091556001805460ff60a01b1916815560029490945560059290925560068054919094169116179091556004805460ff191690911790556100eb565b80516001600160a01b03811681146100a057600080fd5b919050565b600080600080608085870312156100bb57600080fd5b6100c485610089565b935060208501519250604085015191506100e060608601610089565b905092959194509250565b61165280620000fb6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063783399841161008c578063b33712c511610066578063b33712c5146101e7578063c2ce7232146101ef578063e30c397814610202578063f2fde38b1461022257600080fd5b8063783399841461016f5780638da5cb5b146101825780639d76ea58146101c757600080fd5b80633ba86c44116100c85780633ba86c4414610128578063439766ce146101315780635c975abb146101395780637200b8291461016757600080fd5b806323452b9c146100ef5780632eb4a7ab146100f95780632f52ebb714610115575b600080fd5b6100f7610235565b005b61010260025481565b6040519081526020015b60405180910390f35b6100f761012336600461138b565b6102ff565b61010260055481565b6100f7610502565b60015474010000000000000000000000000000000000000000900460ff16604051901515815260200161010c565b6100f761055d565b6100f761017d366004611400565b610643565b6000546101a29073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010c565b6006546101a29073ffffffffffffffffffffffffffffffffffffffff1681565b6100f761070f565b6100f76101fd366004611435565b610768565b6001546101a29073ffffffffffffffffffffffffffffffffffffffff1681565b6100f7610230366004611480565b6108c7565b60005473ffffffffffffffffffffffffffffffffffffffff163314610286576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166102d5576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b610307610a25565b6004543360009081526003602052604090205460ff918216911603610358576040517f646cf55800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600554421115610394576040517fc4560cae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003360601b16602082015260348101849052600090605401604051602081830303815290604052805190602001209050610428838380806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506002549150849050610aaf565b61045e576040517f09bde33900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60045433600081815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff909316929092179091556006546104c79173ffffffffffffffffffffffffffffffffffffffff919091169086610ac5565b60405184815233907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a9060200160405180910390a250505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610553576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055b610afb565b565b60015473ffffffffffffffffffffffffffffffffffffffff163381146105af576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610694576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002839055600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831617905560058290556004805460ff169060006106f1836114ca565b91906101000a81548160ff021916908360ff16021790555050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610760576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055b610b94565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107b9576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107c1610a25565b60005b828110156108c15760008484838181106107e0576107e06114e9565b90506020020160208101906107f59190611480565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa158015610861573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108859190611518565b90506108b885858481811061089c5761089c6114e9565b90506020020160208101906108b19190611480565b8483610beb565b506001016107c4565b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610918576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610965576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036109b4576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60015474010000000000000000000000000000000000000000900460ff161561055b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064015b60405180910390fd5b600082610abc8584610c78565b14949350505050565b73ffffffffffffffffffffffffffffffffffffffff831615610af157610aec838383610cc5565b505050565b610aec8282610e41565b610b03610a25565b600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610b6a3390565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b610b9c610f6b565b600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33610b6a565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052610aec908490610fef565b600081815b8451811015610cbd57610ca982868381518110610c9c57610c9c6114e9565b60200260200101516110fe565b915080610cb581611531565b915050610c7d565b509392505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d12576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d5f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610dcc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df09190611518565b905080821115610e36576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610aa6565b6108c1848484610beb565b73ffffffffffffffffffffffffffffffffffffffff8216610e8e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610ed1576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610aa6565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f2b576040519150601f19603f3d011682016040523d82523d6000602084013e610f30565b606091505b5050905080610aec576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015474010000000000000000000000000000000000000000900460ff1661055b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610aa6565b6000611051826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166111309092919063ffffffff16565b90508051600014806110725750808060200190518101906110729190611569565b610aec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610aa6565b600081831061111a576000828152602084905260409020611129565b60008381526020839052604090205b9392505050565b606061113f8484600085611147565b949350505050565b6060824710156111d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610aa6565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161120291906115af565b60006040518083038185875af1925050503d806000811461123f576040519150601f19603f3d011682016040523d82523d6000602084013e611244565b606091505b509150915061125587838387611260565b979650505050505050565b606083156112f65782516000036112ef5773ffffffffffffffffffffffffffffffffffffffff85163b6112ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610aa6565b508161113f565b61113f838381511561130b5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa691906115cb565b60008083601f84011261135157600080fd5b50813567ffffffffffffffff81111561136957600080fd5b6020830191508360208260051b850101111561138457600080fd5b9250929050565b6000806000604084860312156113a057600080fd5b83359250602084013567ffffffffffffffff8111156113be57600080fd5b6113ca8682870161133f565b9497909650939450505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146113fb57600080fd5b919050565b60008060006060848603121561141557600080fd5b833592506020840135915061142c604085016113d7565b90509250925092565b60008060006040848603121561144a57600080fd5b833567ffffffffffffffff81111561146157600080fd5b61146d8682870161133f565b909450925061142c9050602085016113d7565b60006020828403121561149257600080fd5b611129826113d7565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060ff821660ff81036114e0576114e061149b565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561152a57600080fd5b5051919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036115625761156261149b565b5060010190565b60006020828403121561157b57600080fd5b8151801515811461112957600080fd5b60005b838110156115a657818101518382015260200161158e565b50506000910152565b600082516115c181846020870161158b565b9190910192915050565b60208152600082518060208401526115ea81604085016020870161158b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220b72462dcbff92325bcbf06f99d04d390e058dcda3a8d5c370bfc978080c5663d64736f6c63430008110033";
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
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
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
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
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
