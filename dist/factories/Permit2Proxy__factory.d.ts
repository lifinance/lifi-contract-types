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
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051620016e7380380620016e78339810160408190526100319161006e565b600080546001600160a01b0319166001600160a01b03938416179055166080526100a8565b6001600160a01b038116811461006b57600080fd5b50565b6000806040838503121561008157600080fd5b825161008c81610056565b602084015190925061009d81610056565b809150509250929050565b60805161161c620000cb600039600081816101b7015261069c015261161c6000f3fe6080604052600436106100bc5760003560e01c80636afdd85011610074578063e05387bb1161004e578063e05387bb14610240578063e30c397814610253578063f2fde38b1461028057600080fd5b80636afdd850146101a55780637200b829146101fe5780638da5cb5b1461021357600080fd5b80632c03ae6a116100a55780632c03ae6a1461010357806333320de31461014557806356ee2b501461016557600080fd5b8063156e2152146100c157806323452b9c146100ec575b600080fd5b3480156100cd57600080fd5b506100d66102a0565b6040516100e391906110c1565b60405180910390f35b3480156100f857600080fd5b506101016102bc565b005b34801561010f57600080fd5b506101377f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd81565b6040519081526020016100e3565b34801561015157600080fd5b50610101610160366004611127565b610386565b34801561017157600080fd5b506101956101803660046111bc565b60026020526000908152604090205460ff1681565b60405190151581526020016100e3565b3480156101b157600080fd5b506101d97f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e3565b34801561020a57600080fd5b506101016104d3565b34801561021f57600080fd5b506000546101d99073ffffffffffffffffffffffffffffffffffffffff1681565b61010161024e366004611219565b6105b9565b34801561025f57600080fd5b506001546101d99073ffffffffffffffffffffffffffffffffffffffff1681565b34801561028c57600080fd5b5061010161029b3660046111bc565b6107e3565b6040518060c00160405280609181526020016115566091913981565b60005473ffffffffffffffffffffffffffffffffffffffff16331461030d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661035c576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103d7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b8381101561048f578282828181106103f4576103f46112fa565b9050602002016020810190610409919061133a565b6002600087878581811061041f5761041f6112fa565b905060200201602081019061043491906111bc565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790556001016103da565b507faa9b4ef90f4ce69eff58dfa82ee849c9d5063df771c1320a024b5a9fb6722543848484846040516104c59493929190611357565b60405180910390a150505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610525576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b600060405180606001604052808a73ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff168152602001888860405161060e9291906113f2565b604080519182900390912090915280517f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd602080830191909152835173ffffffffffffffffffffffffffffffffffffffff908116838501529084015116606082015290820151608082015290915060009060a0016040516020818303038152906040528051906020012090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663137c29fe8660405180604001604052803073ffffffffffffffffffffffffffffffffffffffff168152602001896000016020013581525089856040518060c0016040528060918152602001611556609191398a8a6040518863ffffffff1660e01b8152600401610748979695949392919061144b565b600060405180830381600087803b15801561076257600080fd5b505af1158015610776573d6000803e3d6000fd5b50610797925061078c91505060208701876111bc565b8a6020880135610941565b6107d78989898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a8992505050565b50505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610834576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610881576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036108d0576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff831661096157505050565b73ffffffffffffffffffffffffffffffffffffffff82166109ae576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610a23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a479190611503565b1015610a8457610a5983836000610ba0565b610a8483837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610ba0565b505050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604090205460ff16610ae8576040517fb21c96b900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808373ffffffffffffffffffffffffffffffffffffffff163484604051610b11919061151c565b60006040518083038185875af1925050503d8060008114610b4e576040519150601f19603f3d011682016040523d82523d6000602084013e610b53565b606091505b509150915081610b9a57806040517f0e971f12000000000000000000000000000000000000000000000000000000008152600401610b9191906110c1565b60405180910390fd5b50505050565b801580610c4057506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610c1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3e9190611503565b155b610ccc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610b91565b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610a8492869291600091610d97918516908490610e44565b9050805160001480610db8575080806020019051810190610db89190611538565b610a84576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610b91565b6060610e538484600085610e5b565b949350505050565b606082471015610eed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b91565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610f16919061151c565b60006040518083038185875af1925050503d8060008114610f53576040519150601f19603f3d011682016040523d82523d6000602084013e610f58565b606091505b5091509150610f6987838387610f74565b979650505050505050565b6060831561100a5782516000036110035773ffffffffffffffffffffffffffffffffffffffff85163b611003576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b91565b5081610e53565b610e53838381511561101f5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9191906110c1565b60005b8381101561106e578181015183820152602001611056565b50506000910152565b6000815180845261108f816020860160208601611053565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006110d46020830184611077565b9392505050565b60008083601f8401126110ed57600080fd5b50813567ffffffffffffffff81111561110557600080fd5b6020830191508360208260051b850101111561112057600080fd5b9250929050565b6000806000806040858703121561113d57600080fd5b843567ffffffffffffffff8082111561115557600080fd5b611161888389016110db565b9096509450602087013591508082111561117a57600080fd5b50611187878288016110db565b95989497509550505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146111b757600080fd5b919050565b6000602082840312156111ce57600080fd5b6110d482611193565b60008083601f8401126111e957600080fd5b50813567ffffffffffffffff81111561120157600080fd5b60208301915083602082850101111561112057600080fd5b600080600080600080600080888a0361012081121561123757600080fd5b6112408a611193565b985061124e60208b01611193565b975060408a013567ffffffffffffffff8082111561126b57600080fd5b6112778d838e016111d7565b909950975087915061128b60608d01611193565b965060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80840112156112bd57600080fd5b60808c0195506101008c01359250808311156112d857600080fd5b50506112e68b828c016111d7565b999c989b5096995094979396929594505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b801515811461133757600080fd5b50565b60006020828403121561134c57600080fd5b81356110d481611329565b6040808252810184905260008560608301825b878110156113a55773ffffffffffffffffffffffffffffffffffffffff61139084611193565b1682526020928301929091019060010161136a565b5083810360208581019190915285825291508590820160005b868110156113e55782356113d181611329565b1515825291830191908301906001016113be565b5098975050505050505050565b8183823760009101908152919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600061014073ffffffffffffffffffffffffffffffffffffffff8061146f8c611193565b16845260208b0135602085015260408b0135604085015260608b01356060850152808a5116608085015250602089015160a08401526114c660c084018973ffffffffffffffffffffffffffffffffffffffff169052565b8660e0840152806101008401526114df81840187611077565b90508281036101208401526114f5818587611402565b9a9950505050505050505050565b60006020828403121561151557600080fd5b5051919050565b6000825161152e818460208701611053565b9190910192915050565b60006020828403121561154a57600080fd5b81516110d48161132956fe4c49464943616c6c207769746e657373294c49464943616c6c286164647265737320746f6b656e52656365697665722c61646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e7429a264697066735822122004ad9207622abad68d592ce5218520067ef8ed36afa770f87e8d59aae64dabdd64736f6c63430008110033";
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
            readonly name: "_tokenReceiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_diamondAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_diamondCalldata";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_owner";
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
