import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { UniV3StyleFacet, UniV3StyleFacetInterface } from "../../UniV3StyleFacet.sol/UniV3StyleFacet";
type UniV3StyleFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UniV3StyleFacet__factory extends ContractFactory {
    constructor(...args: UniV3StyleFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<UniV3StyleFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): UniV3StyleFacet;
    connect(signer: Signer): UniV3StyleFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50610d538061001c5f395ff3fe608060405234801561000f575f5ffd5b50600436106100fb575f3560e01c80639feb758b11610093578063be83e10f11610063578063be83e10f146100ff578063e81f56f4146100ff578063fa461e33146100ff578063fa85398b146100ff575f5ffd5b80639feb758b146100ff578063a224ef83146100ff578063ae067e0f146100ff578063b05a3306146100ff575f5ffd5b80636118b15d116100ce5780636118b15d146100ff578063654b6487146100ff57806386cbcd52146100ff5780638ae6e750146100ff575f5ffd5b806314cf7886146100ff57806323a69e75146100ff57806332f23b5b146101145780635bee97a3146100ff575b5f5ffd5b61011261010d366004610971565b610127565b005b610112610122366004610a4b565b61018d565b61012f610436565b61013b848484846104cd565b6101877f12d110a66e0c5763793e5d1e64ab8a58a55eab5b86fb83d032af88fce80e258480547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b50505050565b604080518082019091526020858101808352865187018201918301919091525160348601808352516035870180845251604988018452606092831c925f9290921a1515911c8215806101f3575073ffffffffffffffffffffffffffffffffffffffff8116155b1561022a576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8816036102695761026973ffffffffffffffffffffffffffffffffffffffff8716333088610524565b7f12d110a66e0c5763793e5d1e64ab8a58a55eab5b86fb83d032af88fce80e258480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85161790558273ffffffffffffffffffffffffffffffffffffffff1663128acb08828488866103105761030b600173fffd8963efd1fc6a506488495d951d5263988d26610b90565b610320565b6103206401000276a36001610bc2565b6040805173ffffffffffffffffffffffffffffffffffffffff8e166020820152016040516020818303038152906040526040518663ffffffff1660e01b8152600401610370959493929190610c3a565b60408051808303815f875af115801561038b573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103af9190610c92565b50505f6103d97f12d110a66e0c5763793e5d1e64ab8a58a55eab5b86fb83d032af88fce80e258490565b805490915073ffffffffffffffffffffffffffffffffffffffff161561042b576040517fc68f2f1d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050505050565b7f12d110a66e0c5763793e5d1e64ab8a58a55eab5b86fb83d032af88fce80e25845473ffffffffffffffffffffffffffffffffffffffff163381146104ca576040517f48f89ac500000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff821660248201526044015b60405180910390fd5b50565b5f5f85136104db57836104dd565b845b90505f81136104ec5750610187565b5f6104f983850185610cb4565b905061051c73ffffffffffffffffffffffffffffffffffffffff82163384610600565b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526101879085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261065b565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106569084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161057e565b505050565b5f6106bc826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166107689092919063ffffffff16565b905080515f14806106dc5750808060200190518101906106dc9190610cd6565b610656576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104c1565b606061077684845f8561077e565b949350505050565b606082471015610810576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016104c1565b5f5f8673ffffffffffffffffffffffffffffffffffffffff1685876040516108389190610cf5565b5f6040518083038185875af1925050503d805f8114610872576040519150601f19603f3d011682016040523d82523d5f602084013e610877565b606091505b509150915061088887838387610893565b979650505050505050565b606083156109285782515f036109215773ffffffffffffffffffffffffffffffffffffffff85163b610921576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104c1565b5081610776565b610776838381511561093d5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c19190610d0b565b5f5f5f5f60608587031215610984575f5ffd5b8435935060208501359250604085013567ffffffffffffffff8111156109a8575f5ffd5b8501601f810187136109b8575f5ffd5b803567ffffffffffffffff8111156109ce575f5ffd5b8760208284010111156109df575f5ffd5b949793965060200194505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff811681146104ca575f5ffd5b8035610a4681610a1a565b919050565b5f5f5f5f60808587031215610a5e575f5ffd5b843567ffffffffffffffff811115610a74575f5ffd5b8501601f81018713610a84575f5ffd5b803567ffffffffffffffff811115610a9e57610a9e6109ed565b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160116810181811067ffffffffffffffff82111715610b0a57610b0a6109ed565b604052818152828201602001891015610b21575f5ffd5b816020840160208301375f60208383010152809650505050610b4560208601610a3b565b9250610b5360408601610a3b565b9396929550929360600135925050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff8281168282160390811115610bbc57610bbc610b63565b92915050565b73ffffffffffffffffffffffffffffffffffffffff8181168382160190811115610bbc57610bbc610b63565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff86168152841515602082015283604082015273ffffffffffffffffffffffffffffffffffffffff8316606082015260a060808201525f61088860a0830184610bee565b5f5f60408385031215610ca3575f5ffd5b505080516020909101519092909150565b5f60208284031215610cc4575f5ffd5b8135610ccf81610a1a565b9392505050565b5f60208284031215610ce6575f5ffd5b81518015158114610ccf575f5ffd5b5f82518060208501845e5f920191825250919050565b602081525f610ccf6020830184610bee56fea2646970667358221220ebbb4a7300fc2378a1f569cafa912ef4bc7328c749ad6be81c03851c81c32a8c64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "agniSwapCallback";
        readonly inputs: readonly [{
            readonly name: "amount0Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "amount1Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "dragonswapV2SwapCallback";
        readonly inputs: readonly [{
            readonly name: "amount0Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "amount1Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "enosysdexV3SwapCallback";
        readonly inputs: readonly [{
            readonly name: "amount0Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "amount1Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "fusionXV3SwapCallback";
        readonly inputs: readonly [{
            readonly name: "amount0Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "amount1Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "hyperswapV3SwapCallback";
        readonly inputs: readonly [{
            readonly name: "amount0Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "amount1Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "laminarV3SwapCallback";
        readonly inputs: readonly [{
            readonly name: "amount0Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "amount1Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "pancakeV3SwapCallback";
        readonly inputs: readonly [{
            readonly name: "amount0Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "amount1Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rabbitSwapV3SwapCallback";
        readonly inputs: readonly [{
            readonly name: "amount0Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "amount1Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ramsesV2SwapCallback";
        readonly inputs: readonly [{
            readonly name: "amount0Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "amount1Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "supV3SwapCallback";
        readonly inputs: readonly [{
            readonly name: "amount0Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "amount1Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapUniV3";
        readonly inputs: readonly [{
            readonly name: "swapData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenIn";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "uniswapV3SwapCallback";
        readonly inputs: readonly [{
            readonly name: "amount0Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "amount1Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "vvsV3SwapCallback";
        readonly inputs: readonly [{
            readonly name: "amount0Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "amount1Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "xeiV3SwapCallback";
        readonly inputs: readonly [{
            readonly name: "amount0Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "amount1Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "xswapCallback";
        readonly inputs: readonly [{
            readonly name: "amount0Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "amount1Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "zebraV3SwapCallback";
        readonly inputs: readonly [{
            readonly name: "amount0Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "amount1Delta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnexpectedCallbackSender";
        readonly inputs: readonly [{
            readonly name: "actual";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "expected";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "UniV3SwapUnexpected";
        readonly inputs: readonly [];
    }];
    static createInterface(): UniV3StyleFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UniV3StyleFacet;
}
export {};
