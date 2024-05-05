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
    static readonly bytecode = "0x60c060405260006080523480156200001657600080fd5b50604051620019323803806200193283398101604081905262000039916200007c565b600080546001600160a01b0319166001600160a01b039384161790551660a052620000b4565b80516001600160a01b03811681146200007757600080fd5b919050565b600080604083850312156200009057600080fd5b6200009b836200005f565b9150620000ab602084016200005f565b90509250929050565b60805160a051611844620000ee6000396000818161021d015281816103a2015261070901526000818160fd015261069601526118446000f3fe6080604052600436106100bc5760003560e01c80637200b82911610074578063ba956b9a1161004e578063ba956b9a1461020b578063e30c39781461023f578063f2fde38b1461026c57600080fd5b80637200b829146101a95780638da5cb5b146101be57806397b30749146101eb57600080fd5b806358fa63ca116100a557806358fa63ca146100eb5780635b458dc8146101495780635bc35ae81461018957600080fd5b806323452b9c146100c157806344ef2640146100d8575b600080fd5b3480156100cd57600080fd5b506100d661028c565b005b6100d66100e636600461149c565b610356565b3480156100f757600080fd5b5061011f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561015557600080fd5b506101796101643660046114d1565b60026020526000908152604090205460ff1681565b6040519015158152602001610140565b34801561019557600080fd5b506100d66101a43660046114fd565b610488565b3480156101b557600080fd5b506100d661052f565b3480156101ca57600080fd5b5060005461011f9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101f757600080fd5b506100d6610206366004611534565b610615565b34801561021757600080fd5b5061011f7f000000000000000000000000000000000000000000000000000000000000000081565b34801561024b57600080fd5b5060015461011f9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561027857600080fd5b506100d66102873660046114d1565b610770565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102dd576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661032c576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff82811660248301527f00000000000000000000000000000000000000000000000000000000000000001690636e553f659085906044016000604051808303818588803b1580156103e757600080fd5b505af11580156103fb573d6000803e3d6000fd5b5050604051600093503392504791508381818185875af1925050503d8060008114610442576040519150601f19603f3d011682016040523d82523d6000602084013e610447565b606091505b5050905080610482576040517f90b8ec1800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104d9576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260026020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610581576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b61062560608401604085016114d1565b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604090205460ff16610684576040517fb1fe1fe800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61068f6000856108ce565b60006106ba7f0000000000000000000000000000000000000000000000000000000000000000610c03565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff85811660248301529192507f000000000000000000000000000000000000000000000000000000000000000090911690636e553f659083906044016000604051808303818588803b15801561075057600080fd5b505af1158015610764573d6000803e3d6000fd5b50505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107c1576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661080e576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361085d576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b6108e46108de60208301836114d1565b3b151590565b61091a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361095a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061098961096f60608501604086016114d1565b73ffffffffffffffffffffffffffffffffffffffff161590565b61099457600061099a565b82608001355b905060006109b66109b160608601604087016114d1565b610c03565b905060006109cd6109b160808701606088016114d1565b905082600003610a0457610a046109ea60608701604088016114d1565b6109fa60408801602089016114d1565b8760800135610cbc565b8460800135821015610a54576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044015b60405180910390fd5b600080610a6460208801886114d1565b73ffffffffffffffffffffffffffffffffffffffff1685610a8860a08a018a611587565b604051610a969291906115f3565b60006040518083038185875af1925050503d8060008114610ad3576040519150601f19603f3d011682016040523d82523d6000602084013e610ad8565b606091505b509150915081610b23576000610aed82610e04565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4b9190611627565b6000610b386109b160808a0160608b016114d1565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889610b6960208b018b6114d1565b610b7960608c0160408d016114d1565b610b8960808d0160608e016114d1565b8c60800135898711610b9b5786610ba5565b610ba58a886116a7565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610cb4576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610c8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610caf91906116ba565b610cb6565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff8316610cdc57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d29576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc291906116ba565b1015610dff57610dd483836000610e82565b610dff83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e82565b505050565b6060604482511015610e4957505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000610e656004808551610e5d91906116a7565b85919061103b565b905080806020019051810190610e7b9190611702565b9392505050565b801580610f2257506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610efc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2091906116ba565b155b610fae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610a4b565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052610dff908490611155565b60608161104981601f6117c2565b1015611081576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61108b82846117c2565b845110156110c5576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060821580156110e4576040519150600082526020820160405261114c565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561111d578051835260209283019201611105565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60006111b7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166112649092919063ffffffff16565b90508051600014806111d85750808060200190518101906111d891906117d5565b610dff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a4b565b6060611273848460008561127b565b949350505050565b60608247101561130d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a4b565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161133691906117f2565b60006040518083038185875af1925050503d8060008114611373576040519150601f19603f3d011682016040523d82523d6000602084013e611378565b606091505b509150915061138987838387611394565b979650505050505050565b6060831561142a5782516000036114235773ffffffffffffffffffffffffffffffffffffffff85163b611423576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a4b565b5081611273565b611273838381511561143f5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4b9190611627565b803573ffffffffffffffffffffffffffffffffffffffff8116811461149757600080fd5b919050565b6000806000606084860312156114b157600080fd5b83359250602084013591506114c860408501611473565b90509250925092565b6000602082840312156114e357600080fd5b610e7b82611473565b80151581146114fa57600080fd5b50565b6000806040838503121561151057600080fd5b61151983611473565b91506020830135611529816114ec565b809150509250929050565b60008060006060848603121561154957600080fd5b833567ffffffffffffffff81111561156057600080fd5b840160e0818703121561157257600080fd5b9250602084013591506114c860408501611473565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126115bc57600080fd5b83018035915067ffffffffffffffff8211156115d757600080fd5b6020019150368190038213156115ec57600080fd5b9250929050565b8183823760009101908152919050565b60005b8381101561161e578181015183820152602001611606565b50506000910152565b6020815260008251806020840152611646816040850160208701611603565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610cb657610cb6611678565b6000602082840312156116cc57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561171457600080fd5b815167ffffffffffffffff8082111561172c57600080fd5b818401915084601f83011261174057600080fd5b815181811115611752576117526116d3565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611798576117986116d3565b816040528281528760208487010111156117b157600080fd5b611389836020830160208801611603565b80820180821115610cb657610cb6611678565b6000602082840312156117e757600080fd5b8151610e7b816114ec565b60008251611804818460208701611603565b919091019291505056fea26469706673582212209eb474cc2a92ab3c5ed5d5fe3762e56620de32aef4c41c43c9fe01939c81130a64736f6c63430008110033";
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
        readonly name: "allowToken";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "allowed";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "allowedInboundTokens";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
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
