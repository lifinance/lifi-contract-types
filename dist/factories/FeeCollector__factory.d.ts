import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { FeeCollector, FeeCollectorInterface } from "../FeeCollector";
declare type FeeCollectorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FeeCollector__factory extends ContractFactory {
    constructor(...args: FeeCollectorConstructorParams);
    deploy(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<FeeCollector>;
    getDeployTransaction(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): FeeCollector;
    connect(signer: Signer): FeeCollector__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50604051611bd6380380611bd6833981016040819052602b91604e565b5f80546001600160a01b0319166001600160a01b03929092169190911790556079565b5f60208284031215605d575f5ffd5b81516001600160a01b03811681146072575f5ffd5b9392505050565b611b50806100865f395ff3fe6080604052600436106100ce575f3560e01c8063bd0b380b1161007c578063e30c397811610057578063e30c39781461022f578063e5d647661461025b578063eedd56e11461027a578063f2fde38b14610299575f5ffd5b8063bd0b380b146101de578063c489744b146101fd578063e0cbc5f21461021c575f5ffd5b806364bc5be1116100ac57806364bc5be11461015b5780637200b8291461017a5780638da5cb5b1461018e575f5ffd5b80630fe97f70146100d257806323452b9c14610126578063461ad4f51461013c575b5f5ffd5b3480156100dd575f5ffd5b506101136100ec36600461181f565b73ffffffffffffffffffffffffffffffffffffffff165f9081526003602052604090205490565b6040519081526020015b60405180910390f35b348015610131575f5ffd5b5061013a6102b8565b005b348015610147575f5ffd5b5061013a61015636600461181f565b610381565b348015610166575f5ffd5b5061013a61017536600461186c565b610484565b348015610185575f5ffd5b5061013a610647565b348015610199575f5ffd5b505f546101b99073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161011d565b3480156101e9575f5ffd5b5061013a6101f836600461181f565b61072b565b348015610208575f5ffd5b50610113610217366004611955565b6107ed565b61013a61022a366004611986565b610826565b34801561023a575f5ffd5b506001546101b99073ffffffffffffffffffffffffffffffffffffffff1681565b348015610266575f5ffd5b5061013a61027536600461186c565b61096e565b348015610285575f5ffd5b5061013a6102943660046119b8565b610af2565b3480156102a4575f5ffd5b5061013a6102b336600461181f565b610bd9565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610308576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610357576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103d1576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81165f9081526003602052604081205490819003610402575050565b73ffffffffffffffffffffffffffffffffffffffff82165f90815260036020526040812055610432823383610d35565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc906020015b60405180910390a35050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146104d4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80515f805b828110156106415760035f8583815181106104f6576104f66119fb565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205491505f60035f868481518110610550576105506119fb565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055506105b98482815181106105aa576105aa6119fb565b60200260200101513384610d35565b3373ffffffffffffffffffffffffffffffffffffffff168482815181106105e2576105e26119fb565b602002602001015173ffffffffffffffffffffffffffffffffffffffff167fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc8460405161063191815260200190565b60405180910390a36001016104d9565b50505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610699576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b335f90815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915281205490819003610767575050565b335f81815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120556107a390839083610d35565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa890602001610478565b73ffffffffffffffffffffffffffffffffffffffff8083165f908152600260209081526040808320938516835292905220545b92915050565b6108308284611a55565b341015610869576040517f840a2adf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81165f908152600260209081526040808320838052909152812080548592906108a8908490611a55565b90915550505f80805260036020527f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff80548492906108e7908490611a55565b909155505f90506108f88385611a55565b6109029034611a68565b90508015610914576109143382610d6b565b604080518581526020810185905273ffffffffffffffffffffffffffffffffffffffff8416915f917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea91015b60405180910390a350505050565b80515f805b8281101561064157335f90815260026020526040812085519091908690849081106109a0576109a06119fb565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549150815f14610aea57335f90815260026020526040812085518290879085908110610a0f57610a0f6119fb565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550610a698482815181106105aa576105aa6119fb565b3373ffffffffffffffffffffffffffffffffffffffff16848281518110610a9257610a926119fb565b602002602001015173ffffffffffffffffffffffffffffffffffffffff167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa884604051610ae191815260200190565b60405180910390a35b600101610973565b610b0584610b008486611a55565b610d88565b73ffffffffffffffffffffffffffffffffffffffff8082165f90815260026020908152604080832093881683529290529081208054859290610b48908490611a55565b909155505073ffffffffffffffffffffffffffffffffffffffff84165f9081526003602052604081208054849290610b81908490611a55565b9091555050604080518481526020810184905273ffffffffffffffffffffffffffffffffffffffff80841692908716917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea9101610960565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610c29576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610c76576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610cc5576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b73ffffffffffffffffffffffffffffffffffffffff831615610d6157610d5c838383610efb565b505050565b610d5c8282611074565b5f385f3884865af1610d845763b12d13eb5f526004601cfd5b5050565b805f03610dc1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e165780341015610d84576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610e80573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ea49190611a7b565b905081811015610eef576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610d5c8333308561119a565b73ffffffffffffffffffffffffffffffffffffffff8316610f48576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f95576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610fff573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110239190611a7b565b905080821115611069576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610ee6565b6106418484846113af565b73ffffffffffffffffffffffffffffffffffffffff82166110c1576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611104576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610ee6565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f811461115a576040519150601f19603f3d011682016040523d82523d5f602084013e61115f565b606091505b5050905080610d5c576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166111e7576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611234576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa1580156112a2573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112c69190611a7b565b90506112d482868686611483565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611342573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113669190611a7b565b6113709190611a68565b146113a7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610d5c9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526114e1565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526106419085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611401565b5f611542826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166115ee9092919063ffffffff16565b905080515f14806115625750808060200190518101906115629190611a92565b610d5c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610ee6565b60606115fc84845f85611604565b949350505050565b606082471015611696576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610ee6565b5f5f8673ffffffffffffffffffffffffffffffffffffffff1685876040516116be9190611ab1565b5f6040518083038185875af1925050503d805f81146116f8576040519150601f19603f3d011682016040523d82523d5f602084013e6116fd565b606091505b509150915061170e87838387611719565b979650505050505050565b606083156117ae5782515f036117a75773ffffffffffffffffffffffffffffffffffffffff85163b6117a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610ee6565b50816115fc565b6115fc83838151156117c35781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee69190611ac7565b803573ffffffffffffffffffffffffffffffffffffffff8116811461181a575f5ffd5b919050565b5f6020828403121561182f575f5ffd5b611838826117f7565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f6020828403121561187c575f5ffd5b813567ffffffffffffffff811115611892575f5ffd5b8201601f810184136118a2575f5ffd5b803567ffffffffffffffff8111156118bc576118bc61183f565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f830116810181811067ffffffffffffffff821117156119075761190761183f565b604052918252602081840181019290810187841115611924575f5ffd5b6020850194505b8385101561194a5761193c856117f7565b81526020948501940161192b565b509695505050505050565b5f5f60408385031215611966575f5ffd5b61196f836117f7565b915061197d602084016117f7565b90509250929050565b5f5f5f60608486031215611998575f5ffd5b83359250602084013591506119af604085016117f7565b90509250925092565b5f5f5f5f608085870312156119cb575f5ffd5b6119d4856117f7565b935060208501359250604085013591506119f0606086016117f7565b905092959194509250565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b8082018082111561082057610820611a28565b8181038181111561082057610820611a28565b5f60208284031215611a8b575f5ffd5b5051919050565b5f60208284031215611aa2575f5ffd5b81518015158114611838575f5ffd5b5f82518060208501845e5f920191825250919050565b602081525f82518060208401528060208501604085015e5f6040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150509291505056fea26469706673582212208b4fe7eb1d4f061dd01eeb08128cc3fcaec2b4822b030db49b7afb2d164cffa364736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "batchWithdrawIntegratorFees";
        readonly inputs: readonly [{
            readonly name: "tokenAddresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "batchWithdrawLifiFees";
        readonly inputs: readonly [{
            readonly name: "tokenAddresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "collectNativeFees";
        readonly inputs: readonly [{
            readonly name: "integratorFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "lifiFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "integratorAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "collectTokenFees";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "integratorFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "lifiFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "integratorAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getLifiTokenBalance";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getTokenBalance";
        readonly inputs: readonly [{
            readonly name: "integratorAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "withdrawIntegratorFees";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdrawLifiFees";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "FeesCollected";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_integrator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_integratorFee";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_lifiFee";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "FeesWithdrawn";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiFeesWithdrawn";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
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
        readonly name: "InvalidAmount";
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
        readonly name: "NotEnoughNativeForFees";
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
        readonly name: "TransferFailure";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): FeeCollectorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FeeCollector;
}
export {};
