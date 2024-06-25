import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { GasZip, GasZipInterface } from "../../GasZip.sol/GasZip";
declare type GasZipConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasZip__factory extends ContractFactory {
    constructor(...args: GasZipConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasZip>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasZip;
    connect(signer: Signer): GasZip__factory;
    static readonly bytecode = "0x60c0604052600060805234801561001557600080fd5b506040516115eb3803806115eb83398101604081905261003491610075565b600080546001600160a01b0319166001600160a01b039384161790551660a0526100a8565b80516001600160a01b038116811461007057600080fd5b919050565b6000806040838503121561008857600080fd5b61009183610059565b915061009f60208401610059565b90509250929050565b60805160a05161150a6100e1600039600081816101960152818161031b015261057801526000818160d70152610505015261150a6000f3fe6080604052600436106100965760003560e01c80638da5cb5b11610069578063ba956b9a1161004e578063ba956b9a14610184578063e30c3978146101b8578063f2fde38b146101e557600080fd5b80638da5cb5b1461013757806397b307491461016457600080fd5b806323452b9c1461009b57806344ef2640146100b257806358fa63ca146100c55780637200b82914610122575b600080fd5b3480156100a757600080fd5b506100b0610205565b005b6100b06100c03660046112a8565b6102cf565b3480156100d157600080fd5b506100f97f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561012e57600080fd5b506100b061040d565b34801561014357600080fd5b506000546100f99073ffffffffffffffffffffffffffffffffffffffff1681565b34801561017057600080fd5b506100b061017f3660046112dd565b6104f3565b34801561019057600080fd5b506100f97f000000000000000000000000000000000000000000000000000000000000000081565b3480156101c457600080fd5b506001546100f99073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101f157600080fd5b506100b0610200366004611330565b610766565b60005473ffffffffffffffffffffffffffffffffffffffff163314610256576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166102a5576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff82811660248301527f00000000000000000000000000000000000000000000000000000000000000001690636e553f659085906044016000604051808303818588803b15801561036057600080fd5b505af1158015610374573d6000803e3d6000fd5b504793505082159150610407905057604051600090339047908381818185875af1925050503d80600081146103c5576040519150601f19603f3d011682016040523d82523d6000602084013e6103ca565b606091505b5050905080610405576040517f90b8ec1800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b50505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461045f576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6104fe6000846108c4565b60006105297f0000000000000000000000000000000000000000000000000000000000000000610bc1565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff84811660248301529192507f000000000000000000000000000000000000000000000000000000000000000090911690636e553f659083906044016000604051808303818588803b1580156105bf57600080fd5b505af11580156105d3573d6000803e3d6000fd5b505050505060008460400160208101906105ed9190611330565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561065d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106819190611352565b9050801561075e576040517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810182905260009073ffffffffffffffffffffffffffffffffffffffff84169063a9059cbb906044016020604051808303816000875af11580156106ff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610723919061136b565b90508061075c576040517f90b8ec1800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107b7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610804576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610853576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b6108da6108d46020830183611330565b3b151590565b610910576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610950576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061097f6109656060850160408601611330565b73ffffffffffffffffffffffffffffffffffffffff161590565b61098a576000610990565b82608001355b905060006109ac6109a76060860160408701611330565b610bc1565b905060006109c36109a76080870160608801611330565b9050826000036109fa576109fa6109e06060870160408801611330565b6109f06040880160208901611330565b8760800135610c7a565b8460800135821015610a4a576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044015b60405180910390fd5b600080610a5a6020880188611330565b73ffffffffffffffffffffffffffffffffffffffff1685610a7e60a08a018a61138d565b604051610a8c9291906113f9565b60006040518083038185875af1925050503d8060008114610ac9576040519150601f19603f3d011682016040523d82523d6000602084013e610ace565b606091505b509150915081610ae157610ae181610dc2565b6000610af66109a760808a0160608b01611330565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889610b2760208b018b611330565b610b3760608c0160408d01611330565b610b4760808d0160608e01611330565b8c60800135898711610b595786610b63565b610b638a88611409565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610c72576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610c49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6d9190611352565b610c74565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff8316610c9a57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610ce7576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d809190611352565b1015610dbd57610d9283836000610dcc565b610dbd83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610dcc565b505050565b8051602082018181fd5b801580610e6c57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610e46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6a9190611352565b155b610ef8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610a41565b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610dbd92869291600091610fc3918516908490611070565b9050805160001480610fe4575080806020019051810190610fe4919061136b565b610dbd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a41565b606061107f8484600085611087565b949350505050565b606082471015611119576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a41565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516111429190611467565b60006040518083038185875af1925050503d806000811461117f576040519150601f19603f3d011682016040523d82523d6000602084013e611184565b606091505b5091509150611195878383876111a0565b979650505050505050565b6060831561123657825160000361122f5773ffffffffffffffffffffffffffffffffffffffff85163b61122f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a41565b508161107f565b61107f838381511561124b5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a419190611483565b803573ffffffffffffffffffffffffffffffffffffffff811681146112a357600080fd5b919050565b6000806000606084860312156112bd57600080fd5b83359250602084013591506112d46040850161127f565b90509250925092565b6000806000606084860312156112f257600080fd5b833567ffffffffffffffff81111561130957600080fd5b840160e0818703121561131b57600080fd5b9250602084013591506112d46040850161127f565b60006020828403121561134257600080fd5b61134b8261127f565b9392505050565b60006020828403121561136457600080fd5b5051919050565b60006020828403121561137d57600080fd5b8151801515811461134b57600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126113c257600080fd5b83018035915067ffffffffffffffff8211156113dd57600080fd5b6020019150368190038213156113f257600080fd5b9250929050565b8183823760009101908152919050565b81810381811115610c74577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60005b8381101561145e578181015183820152602001611446565b50506000910152565b60008251611479818460208701611443565b9190910192915050565b60208152600082518060208401526114a2816040850160208701611443565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220a931798e54b173b7dba017c58cd70dbf6085c97acc62d9b27388acfa407b8a6264736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_gasZipRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ZERO";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
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
        readonly name: "gasZipRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGasZip";
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
        readonly name: "zip";
        readonly inputs: readonly [{
            readonly name: "amountToZip";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "destinationChain";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "zipERC20";
        readonly inputs: readonly [{
            readonly name: "_swap";
            readonly type: "tuple";
            readonly internalType: "struct LibSwap.SwapData";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "destinationChain";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "GasZipFailed";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InboundTokenDisallowed";
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
        readonly name: "InvalidContract";
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
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SwapFailed";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "TransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): GasZipInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasZip;
}
export {};
