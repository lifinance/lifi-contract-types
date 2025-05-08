import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { SafeProxyFactory, SafeProxyFactoryInterface } from "../../SafeProxyFactory_flattened.sol/SafeProxyFactory";
declare type SafeProxyFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeProxyFactory__factory extends ContractFactory {
    constructor(...args: SafeProxyFactoryConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SafeProxyFactory>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SafeProxyFactory;
    connect(signer: Signer): SafeProxyFactory__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50610a638061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061007a575f3560e01c80634662f9d6116100585780634662f9d6146100dc57806353e5d935146100ef578063d18af54d14610104578063ec9e80bb14610117575f5ffd5b80631688f0b91461007e5780632ad56908146100bb5780633408e470146100ce575b5f5ffd5b61009161008c3660046106e1565b61012a565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100916100c9366004610737565b6101cb565b6040514681526020016100b2565b6100916100ea3660046106e1565b6102e0565b6100f7610347565b6040516100b291906107eb565b610091610112366004610737565b61038f565b6100916101253660046106e1565b6103f7565b5f5f83805190602001208360405160200161014f929190918252602082015260400190565b604051602081830303815290604052805190602001209050610172858583610428565b60405173ffffffffffffffffffffffffffffffffffffffff8781168252919350908316907f4f51faf6c4561ff95f067657e43439f0f856d97c04d9ec9070a6199ad418e2359060200160405180910390a2509392505050565b5f5f838360405160200161020e92919091825260601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602082015260340190565b604051602081830303815290604052805190602001205f1c90506102338686836102e0565b915073ffffffffffffffffffffffffffffffffffffffff8316156102d7576040517f1e52b51800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841690631e52b518906102a99085908a908a908a90600401610804565b5f604051808303815f87803b1580156102c0575f5ffd5b505af11580156102d2573d5f5f3e3d5ffd5b505050505b50949350505050565b5f6102ec84848461012a565b90508073ffffffffffffffffffffffffffffffffffffffff167f6e78ae8c51534f0b801d7aa7cce5a2113f3c3368c61b06fa61415f361d4004318585856040516103389392919061085f565b60405180910390a29392505050565b606060405180602001610359906105bb565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116604052919050565b5f5f83836040516020016103d292919091825260601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602082015260340190565b604051602081830303815290604052805190602001205f1c905061023386868361012a565b5f5f8380519060200120836104094690565b604080516020810194909452830191909152606082015260800161014f565b5f833b610496576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f53696e676c65746f6e20636f6e7472616374206e6f74206465706c6f7965640060448201526064015b60405180910390fd5b5f604051806020016104a7906105bb565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f9091011660408190526104ff919073ffffffffffffffffffffffffffffffffffffffff88169060200161089d565b6040516020818303038152906040529050828151826020015ff5915073ffffffffffffffffffffffffffffffffffffffff8216610598576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f437265617465322063616c6c206661696c656400000000000000000000000000604482015260640161048d565b8351156105b3575f5f8551602087015f865af16105b3575f5ffd5b509392505050565b610176806108b883390190565b73ffffffffffffffffffffffffffffffffffffffff811681146105e9575f5ffd5b50565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f82601f830112610628575f5ffd5b813567ffffffffffffffff811115610642576106426105ec565b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160116810181811067ffffffffffffffff821117156106ae576106ae6105ec565b6040528181528382016020018510156106c5575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f606084860312156106f3575f5ffd5b83356106fe816105c8565b9250602084013567ffffffffffffffff811115610719575f5ffd5b61072586828701610619565b93969395505050506040919091013590565b5f5f5f5f6080858703121561074a575f5ffd5b8435610755816105c8565b9350602085013567ffffffffffffffff811115610770575f5ffd5b61077c87828801610619565b935050604085013591506060850135610794816105c8565b939692955090935050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081525f6107fd602083018461079f565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8516815273ffffffffffffffffffffffffffffffffffffffff84166020820152608060408201525f61084e608083018561079f565b905082606083015295945050505050565b73ffffffffffffffffffffffffffffffffffffffff84168152606060208201525f61088d606083018561079f565b9050826040830152949350505050565b5f83518060208601845e919091019182525060200191905056fe6080604052348015600e575f5ffd5b50604051610176380380610176833981016040819052602b9160b2565b6001600160a01b038116608f5760405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b606482015260840160405180910390fd5b5f80546001600160a01b0319166001600160a01b039290921691909117905560dd565b5f6020828403121560c1575f5ffd5b81516001600160a01b038116811460d6575f5ffd5b9392505050565b608d806100e95f395ff3fe60806040525f547fa619486e000000000000000000000000000000000000000000000000000000005f35036039578060601b600c5260205ff35b365f5f375f5f365f845af490503d5f5f3e806052573d5ffd5b503d5ff3fea26469706673582212207d5db7fcbf2310c12e5fff9b422107fe0cff8e0fa422ad4041a511543f698f5c64736f6c634300081d0033a2646970667358221220267d9ba230c9a43c488109ac037ee5add309c524b59ac68452520649755cb31664736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "createChainSpecificProxyWithNonce";
        readonly inputs: readonly [{
            readonly name: "_singleton";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "initializer";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "saltNonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "proxy";
            readonly type: "address";
            readonly internalType: "contract SafeProxy";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createProxyWithCallback";
        readonly inputs: readonly [{
            readonly name: "_singleton";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "initializer";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "saltNonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "callback";
            readonly type: "address";
            readonly internalType: "contract IProxyCreationCallback";
        }];
        readonly outputs: readonly [{
            readonly name: "proxy";
            readonly type: "address";
            readonly internalType: "contract SafeProxy";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createProxyWithCallbackL2";
        readonly inputs: readonly [{
            readonly name: "_singleton";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "initializer";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "saltNonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "callback";
            readonly type: "address";
            readonly internalType: "contract IProxyCreationCallback";
        }];
        readonly outputs: readonly [{
            readonly name: "proxy";
            readonly type: "address";
            readonly internalType: "contract SafeProxy";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createProxyWithNonce";
        readonly inputs: readonly [{
            readonly name: "_singleton";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "initializer";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "saltNonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "proxy";
            readonly type: "address";
            readonly internalType: "contract SafeProxy";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createProxyWithNonceL2";
        readonly inputs: readonly [{
            readonly name: "_singleton";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "initializer";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "saltNonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "proxy";
            readonly type: "address";
            readonly internalType: "contract SafeProxy";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getChainId";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "proxyCreationCode";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "event";
        readonly name: "ProxyCreation";
        readonly inputs: readonly [{
            readonly name: "proxy";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "contract SafeProxy";
        }, {
            readonly name: "singleton";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ProxyCreationL2";
        readonly inputs: readonly [{
            readonly name: "proxy";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "contract SafeProxy";
        }, {
            readonly name: "singleton";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "initializer";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }, {
            readonly name: "saltNonce";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): SafeProxyFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeProxyFactory;
}
export {};
