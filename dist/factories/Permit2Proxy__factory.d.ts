import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Permit2Proxy, Permit2ProxyInterface } from "../Permit2Proxy";
declare type Permit2ProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Permit2Proxy__factory extends ContractFactory {
    constructor(...args: Permit2ProxyConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _permit2: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Permit2Proxy>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _permit2: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Permit2Proxy;
    connect(signer: Signer): Permit2Proxy__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b506040516116b03803806116b083398101604081905261002f9161006c565b600080546001600160a01b0319166001600160a01b03938416179055166080526100a6565b6001600160a01b038116811461006957600080fd5b50565b6000806040838503121561007f57600080fd5b825161008a81610054565b602084015190925061009b81610054565b809150509250929050565b6080516115e86100c8600039600081816101b7015261067a01526115e86000f3fe6080604052600436106100bc5760003560e01c80636afdd850116100745780638da5cb5b1161004e5780638da5cb5b14610226578063e30c397814610253578063f2fde38b1461028057600080fd5b80636afdd850146101a55780637200b829146101fe57806383bd81741461021357600080fd5b80632c03ae6a116100a55780632c03ae6a1461010357806333320de31461014557806356ee2b501461016557600080fd5b8063156e2152146100c157806323452b9c146100ec575b600080fd5b3480156100cd57600080fd5b506100d66102a0565b6040516100e3919061109e565b60405180910390f35b3480156100f857600080fd5b506101016102bc565b005b34801561010f57600080fd5b506101377f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd81565b6040519081526020016100e3565b34801561015157600080fd5b50610101610160366004611104565b610386565b34801561017157600080fd5b50610195610180366004611199565b60026020526000908152604090205460ff1681565b60405190151581526020016100e3565b3480156101b157600080fd5b506101d97f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e3565b34801561020a57600080fd5b506101016104d3565b6101016102213660046111f6565b6105b9565b34801561023257600080fd5b506000546101d99073ffffffffffffffffffffffffffffffffffffffff1681565b34801561025f57600080fd5b506001546101d99073ffffffffffffffffffffffffffffffffffffffff1681565b34801561028c57600080fd5b5061010161029b366004611199565b6107c0565b6040518060c00160405280609181526020016115226091913981565b60005473ffffffffffffffffffffffffffffffffffffffff16331461030d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661035c576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103d7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b8381101561048f578282828181106103f4576103f46112c6565b90506020020160208101906104099190611306565b6002600087878581811061041f5761041f6112c6565b90506020020160208101906104349190611199565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790556001016103da565b507faa9b4ef90f4ce69eff58dfa82ee849c9d5063df771c1320a024b5a9fb6722543848484846040516104c59493929190611323565b60405180910390a150505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610525576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b600060405180604001604052808973ffffffffffffffffffffffffffffffffffffffff16815260200188886040516105f29291906113be565b6040518091039020815250905060007f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd82604051602001610660929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b6040516020818303038152906040528051906020012090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663137c29fe8660405180604001604052803073ffffffffffffffffffffffffffffffffffffffff168152602001896000016020013581525089856040518060c0016040528060918152602001611522609191398a8a6040518863ffffffff1660e01b81526004016107269796959493929190611417565b600060405180830381600087803b15801561074057600080fd5b505af1158015610754573d6000803e3d6000fd5b50610775925061076a9150506020870187611199565b8a602088013561091e565b6107b58989898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a6692505050565b505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610811576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661085e576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036108ad576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff831661093e57505050565b73ffffffffffffffffffffffffffffffffffffffff821661098b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610a00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2491906114cf565b1015610a6157610a3683836000610b7d565b610a6183837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610b7d565b505050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604090205460ff16610ac5576040517fb21c96b900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808373ffffffffffffffffffffffffffffffffffffffff163484604051610aee91906114e8565b60006040518083038185875af1925050503d8060008114610b2b576040519150601f19603f3d011682016040523d82523d6000602084013e610b30565b606091505b509150915081610b7757806040517f0e971f12000000000000000000000000000000000000000000000000000000008152600401610b6e919061109e565b60405180910390fd5b50505050565b801580610c1d57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610bf7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1b91906114cf565b155b610ca9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610b6e565b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610a6192869291600091610d74918516908490610e21565b9050805160001480610d95575080806020019051810190610d959190611504565b610a61576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610b6e565b6060610e308484600085610e38565b949350505050565b606082471015610eca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b6e565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610ef391906114e8565b60006040518083038185875af1925050503d8060008114610f30576040519150601f19603f3d011682016040523d82523d6000602084013e610f35565b606091505b5091509150610f4687838387610f51565b979650505050505050565b60608315610fe7578251600003610fe05773ffffffffffffffffffffffffffffffffffffffff85163b610fe0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b6e565b5081610e30565b610e308383815115610ffc5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6e919061109e565b60005b8381101561104b578181015183820152602001611033565b50506000910152565b6000815180845261106c816020860160208601611030565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006110b16020830184611054565b9392505050565b60008083601f8401126110ca57600080fd5b50813567ffffffffffffffff8111156110e257600080fd5b6020830191508360208260051b85010111156110fd57600080fd5b9250929050565b6000806000806040858703121561111a57600080fd5b843567ffffffffffffffff8082111561113257600080fd5b61113e888389016110b8565b9096509450602087013591508082111561115757600080fd5b50611164878288016110b8565b95989497509550505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461119457600080fd5b919050565b6000602082840312156111ab57600080fd5b6110b182611170565b60008083601f8401126111c657600080fd5b50813567ffffffffffffffff8111156111de57600080fd5b6020830191508360208285010111156110fd57600080fd5b600080600080600080600087890361010081121561121357600080fd5b61121c89611170565b9750602089013567ffffffffffffffff8082111561123957600080fd5b6112458c838d016111b4565b909950975087915061125960408c01611170565b965060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08401121561128b57600080fd5b60608b01955060e08b01359250808311156112a557600080fd5b50506112b38a828b016111b4565b989b979a50959850939692959293505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b801515811461130357600080fd5b50565b60006020828403121561131857600080fd5b81356110b1816112f5565b6040808252810184905260008560608301825b878110156113715773ffffffffffffffffffffffffffffffffffffffff61135c84611170565b16825260209283019290910190600101611336565b5083810360208581019190915285825291508590820160005b868110156113b157823561139d816112f5565b15158252918301919083019060010161138a565b5098975050505050505050565b8183823760009101908152919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600061014073ffffffffffffffffffffffffffffffffffffffff8061143b8c611170565b16845260208b0135602085015260408b0135604085015260608b01356060850152808a5116608085015250602089015160a084015261149260c084018973ffffffffffffffffffffffffffffffffffffffff169052565b8660e0840152806101008401526114ab81840187611054565b90508281036101208401526114c18185876113ce565b9a9950505050505050505050565b6000602082840312156114e157600080fd5b5051919050565b600082516114fa818460208701611030565b9190910192915050565b60006020828403121561151657600080fd5b81516110b1816112f556fe4c49464943616c6c207769746e657373294c49464943616c6c286164647265737320746f6b656e52656365697665722c61646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e7429a2646970667358221220fc9a37beed5c39786371dda81cb37261dc5a73cd8906159719777598e728980264736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_permit2";
            readonly type: "address";
            readonly internalType: "contract ISignatureTransfer";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "PERMIT2";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ISignatureTransfer";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "WITNESS_TYPEHASH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "WITNESS_TYPE_STRING";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
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
        readonly name: "diamondCallSingle";
        readonly inputs: readonly [{
            readonly name: "_diamondAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_diamondCalldata";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_signer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_permit";
            readonly type: "tuple";
            readonly internalType: "struct ISignatureTransfer.PermitTransferFrom";
            readonly components: readonly [{
                readonly name: "permitted";
                readonly type: "tuple";
                readonly internalType: "struct ISignatureTransfer.TokenPermissions";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "_signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "diamondWhitelist";
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
        readonly name: "updateWhitelist";
        readonly inputs: readonly [{
            readonly name: "addresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
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
        readonly type: "event";
        readonly name: "WhitelistUpdated";
        readonly inputs: readonly [{
            readonly name: "addresses";
            readonly type: "address[]";
            readonly indexed: false;
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "bool[]";
            readonly indexed: false;
            readonly internalType: "bool[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CallToDiamondFailed";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly type: "error";
        readonly name: "DiamondAddressNotWhitelisted";
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
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): Permit2ProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Permit2Proxy;
}
export {};
