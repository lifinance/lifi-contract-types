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
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051611c67380380611c6783398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b611bd4806100936000396000f3fe6080604052600436106100d25760003560e01c8063bd0b380b1161007f578063e30c397811610059578063e30c39781461023e578063e5d647661461026b578063eedd56e11461028b578063f2fde38b146102ab57600080fd5b8063bd0b380b146101eb578063c489744b1461020b578063e0cbc5f21461022b57600080fd5b806364bc5be1116100b057806364bc5be1146101645780637200b829146101845780638da5cb5b1461019957600080fd5b80630fe97f70146100d757806323452b9c1461012d578063461ad4f514610144575b600080fd5b3480156100e357600080fd5b5061011a6100f236600461186c565b73ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b6040519081526020015b60405180910390f35b34801561013957600080fd5b506101426102cb565b005b34801561015057600080fd5b5061014261015f36600461186c565b610395565b34801561017057600080fd5b5061014261017f3660046118bd565b61049b565b34801561019057600080fd5b50610142610665565b3480156101a557600080fd5b506000546101c69073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610124565b3480156101f757600080fd5b5061014261020636600461186c565b61074b565b34801561021757600080fd5b5061011a6102263660046119a0565b61080f565b6101426102393660046119d3565b610849565b34801561024a57600080fd5b506001546101c69073ffffffffffffffffffffffffffffffffffffffff1681565b34801561027757600080fd5b506101426102863660046118bd565b610995565b34801561029757600080fd5b506101426102a6366004611a08565b610b1f565b3480156102b757600080fd5b506101426102c636600461186c565b610c08565b60005473ffffffffffffffffffffffffffffffffffffffff16331461031c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661036b576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103e6576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604081205490819003610418575050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260036020526040812055610449823383610d66565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc906020015b60405180910390a35050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104ec576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516000805b8281101561065f576003600085838151811061051057610510611a4e565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915060006003600086848151811061056d5761056d611a4e565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506105d78482815181106105c8576105c8611a4e565b60200260200101513384610d66565b3373ffffffffffffffffffffffffffffffffffffffff1684828151811061060057610600611a4e565b602002602001015173ffffffffffffffffffffffffffffffffffffffff167fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc8460405161064f91815260200190565b60405180910390a36001016104f2565b50505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146106b7576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b33600090815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915281205490819003610788575050565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120556107c590839083610d66565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa89060200161048f565b73ffffffffffffffffffffffffffffffffffffffff8083166000908152600260209081526040808320938516835292905220545b92915050565b6108538284611aac565b34101561088c576040517f840a2adf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600260209081526040808320838052909152812080548592906108cc908490611aac565b9091555050600080805260036020527f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff805484929061090c908490611aac565b909155506000905061091e8385611aac565b6109289034611abf565b9050801561093a5761093a3382610d9c565b604080518581526020810185905273ffffffffffffffffffffffffffffffffffffffff8416916000917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea91015b60405180910390a350505050565b80516000805b8281101561065f5733600090815260026020526040812085519091908690849081106109c9576109c9611a4e565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915081600014610b175733600090815260026020526040812085518290879085908110610a3b57610a3b611a4e565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a968482815181106105c8576105c8611a4e565b3373ffffffffffffffffffffffffffffffffffffffff16848281518110610abf57610abf611a4e565b602002602001015173ffffffffffffffffffffffffffffffffffffffff167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa884604051610b0e91815260200190565b60405180910390a35b60010161099b565b610b3284610b2d8486611aac565b610dbc565b73ffffffffffffffffffffffffffffffffffffffff808216600090815260026020908152604080832093881683529290529081208054859290610b76908490611aac565b909155505073ffffffffffffffffffffffffffffffffffffffff841660009081526003602052604081208054849290610bb0908490611aac565b9091555050604080518481526020810184905273ffffffffffffffffffffffffffffffffffffffff80841692908716917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea9101610987565b60005473ffffffffffffffffffffffffffffffffffffffff163314610c59576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610ca6576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610cf5576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff831615610d9257610d8d838383610f33565b505050565b610d8d82826110af565b60003860003884865af1610db85763b12d13eb6000526004601cfd5b5050565b80600003610df6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e4b5780341015610db8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610eb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610edc9190611ad2565b905081811015610f27576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610d8d833330856111d9565b73ffffffffffffffffffffffffffffffffffffffff8316610f80576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610fcd576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561103a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061105e9190611ad2565b9050808211156110a4576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610f1e565b61065f8484846113f3565b73ffffffffffffffffffffffffffffffffffffffff82166110fc576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561113f576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610f1e565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611199576040519150601f19603f3d011682016040523d82523d6000602084013e61119e565b606091505b5050905080610d8d576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611226576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611273576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156112e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113089190611ad2565b9050611316828686866114c7565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611386573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113aa9190611ad2565b6113b49190611abf565b146113eb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610d8d9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611525565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261065f9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611445565b6000611587826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166116349092919063ffffffff16565b90508051600014806115a85750808060200190518101906115a89190611aeb565b610d8d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610f1e565b6060611643848460008561164b565b949350505050565b6060824710156116dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610f1e565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516117069190611b31565b60006040518083038185875af1925050503d8060008114611743576040519150601f19603f3d011682016040523d82523d6000602084013e611748565b606091505b509150915061175987838387611764565b979650505050505050565b606083156117fa5782516000036117f35773ffffffffffffffffffffffffffffffffffffffff85163b6117f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610f1e565b5081611643565b611643838381511561180f5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1e9190611b4d565b803573ffffffffffffffffffffffffffffffffffffffff8116811461186757600080fd5b919050565b60006020828403121561187e57600080fd5b61188782611843565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060208083850312156118d057600080fd5b823567ffffffffffffffff808211156118e857600080fd5b818501915085601f8301126118fc57600080fd5b81358181111561190e5761190e61188e565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f830116810181811085821117156119515761195161188e565b60405291825284820192508381018501918883111561196f57600080fd5b938501935b828510156119945761198585611843565b84529385019392850192611974565b98975050505050505050565b600080604083850312156119b357600080fd5b6119bc83611843565b91506119ca60208401611843565b90509250929050565b6000806000606084860312156119e857600080fd5b83359250602084013591506119ff60408501611843565b90509250925092565b60008060008060808587031215611a1e57600080fd5b611a2785611843565b93506020850135925060408501359150611a4360608601611843565b905092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561084357610843611a7d565b8181038181111561084357610843611a7d565b600060208284031215611ae457600080fd5b5051919050565b600060208284031215611afd57600080fd5b8151801515811461188757600080fd5b60005b83811015611b28578181015183820152602001611b10565b50506000910152565b60008251611b43818460208701611b0d565b9190910192915050565b6020815260008251806020840152611b6c816040850160208701611b0d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220f4e7bef373c54e31bdc7722b2acf747cc11aa9dfdf4961447070040f84c3eb2064736f6c63430008110033";
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
