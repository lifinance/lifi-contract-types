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
    static readonly bytecode = "0x60c0604052600060805234801561001557600080fd5b506040516114da3803806114da83398101604081905261003491610075565b600080546001600160a01b0319166001600160a01b039384161790551660a0526100a8565b80516001600160a01b038116811461007057600080fd5b919050565b6000806040838503121561008857600080fd5b61009183610059565b915061009f60208401610059565b90509250929050565b60805160a0516113f96100e1600039600081816101960152818161031b015261056c01526000818160d701526104f901526113f96000f3fe6080604052600436106100965760003560e01c80638da5cb5b11610069578063ba956b9a1161004e578063ba956b9a14610184578063e30c3978146101b8578063f2fde38b146101e557600080fd5b80638da5cb5b1461013757806397b307491461016457600080fd5b806323452b9c1461009b57806344ef2640146100b257806358fa63ca146100c55780637200b82914610122575b600080fd5b3480156100a757600080fd5b506100b0610205565b005b6100b06100c0366004611197565b6102cf565b3480156100d157600080fd5b506100f97f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561012e57600080fd5b506100b0610401565b34801561014357600080fd5b506000546100f99073ffffffffffffffffffffffffffffffffffffffff1681565b34801561017057600080fd5b506100b061017f3660046111cc565b6104e7565b34801561019057600080fd5b506100f97f000000000000000000000000000000000000000000000000000000000000000081565b3480156101c457600080fd5b506001546100f99073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101f157600080fd5b506100b061020036600461121f565b610655565b60005473ffffffffffffffffffffffffffffffffffffffff163314610256576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166102a5576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff82811660248301527f00000000000000000000000000000000000000000000000000000000000000001690636e553f659085906044016000604051808303818588803b15801561036057600080fd5b505af1158015610374573d6000803e3d6000fd5b5050604051600093503392504791508381818185875af1925050503d80600081146103bb576040519150601f19603f3d011682016040523d82523d6000602084013e6103c0565b606091505b50509050806103fb576040517f90b8ec1800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610453576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6104f26000846107b3565b600061051d7f0000000000000000000000000000000000000000000000000000000000000000610ab0565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff84811660248301529192507f000000000000000000000000000000000000000000000000000000000000000090911690636e553f659083906044016000604051808303818588803b1580156105b357600080fd5b505af11580156105c7573d6000803e3d6000fd5b5050604051600093503392504791508381818185875af1925050503d806000811461060e576040519150601f19603f3d011682016040523d82523d6000602084013e610613565b606091505b505090508061064e576040517f90b8ec1800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106a6576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166106f3576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610742576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b6107c96107c3602083018361121f565b3b151590565b6107ff576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361083f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061086e610854606085016040860161121f565b73ffffffffffffffffffffffffffffffffffffffff161590565b61087957600061087f565b82608001355b9050600061089b610896606086016040870161121f565b610ab0565b905060006108b2610896608087016060880161121f565b9050826000036108e9576108e96108cf606087016040880161121f565b6108df604088016020890161121f565b8760800135610b69565b8460800135821015610939576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044015b60405180910390fd5b600080610949602088018861121f565b73ffffffffffffffffffffffffffffffffffffffff168561096d60a08a018a611241565b60405161097b9291906112ad565b60006040518083038185875af1925050503d80600081146109b8576040519150601f19603f3d011682016040523d82523d6000602084013e6109bd565b606091505b5091509150816109d0576109d081610cb1565b60006109e561089660808a0160608b0161121f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889610a1660208b018b61121f565b610a2660608c0160408d0161121f565b610a3660808d0160608e0161121f565b8c60800135898711610a485786610a52565b610a528a886112bd565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610b61576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610b38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5c91906112f7565b610b63565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff8316610b8957505050565b73ffffffffffffffffffffffffffffffffffffffff8216610bd6576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6f91906112f7565b1015610cac57610c8183836000610cbb565b610cac83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610cbb565b505050565b8051602082018181fd5b801580610d5b57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610d35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5991906112f7565b155b610de7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610930565b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610cac92869291600091610eb2918516908490610f5f565b9050805160001480610ed3575080806020019051810190610ed39190611310565b610cac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610930565b6060610f6e8484600085610f76565b949350505050565b606082471015611008576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610930565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516110319190611356565b60006040518083038185875af1925050503d806000811461106e576040519150601f19603f3d011682016040523d82523d6000602084013e611073565b606091505b50915091506110848783838761108f565b979650505050505050565b6060831561112557825160000361111e5773ffffffffffffffffffffffffffffffffffffffff85163b61111e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610930565b5081610f6e565b610f6e838381511561113a5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109309190611372565b803573ffffffffffffffffffffffffffffffffffffffff8116811461119257600080fd5b919050565b6000806000606084860312156111ac57600080fd5b83359250602084013591506111c36040850161116e565b90509250925092565b6000806000606084860312156111e157600080fd5b833567ffffffffffffffff8111156111f857600080fd5b840160e0818703121561120a57600080fd5b9250602084013591506111c36040850161116e565b60006020828403121561123157600080fd5b61123a8261116e565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261127657600080fd5b83018035915067ffffffffffffffff82111561129157600080fd5b6020019150368190038213156112a657600080fd5b9250929050565b8183823760009101908152919050565b81810381811115610b63577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561130957600080fd5b5051919050565b60006020828403121561132257600080fd5b8151801515811461123a57600080fd5b60005b8381101561134d578181015183820152602001611335565b50506000910152565b60008251611368818460208701611332565b9190910192915050565b6020815260008251806020840152611391816040850160208701611332565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220b9ed7f41360aefd782193001dc8b698e7e7b8e412dfb479cf01614aa27643ddc64736f6c63430008110033";
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
