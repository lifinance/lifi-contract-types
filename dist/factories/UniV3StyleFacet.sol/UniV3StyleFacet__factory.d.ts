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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50610d898061001c5f395ff3fe608060405234801561000f575f5ffd5b50600436106100fb575f3560e01c80639feb758b11610093578063be83e10f11610063578063be83e10f146100ff578063e81f56f4146100ff578063fa461e33146100ff578063fa85398b146100ff575f5ffd5b80639feb758b146100ff578063a224ef83146100ff578063ae067e0f146100ff578063b05a3306146100ff575f5ffd5b80636118b15d116100ce5780636118b15d146100ff578063654b6487146100ff57806386cbcd52146100ff5780638ae6e750146100ff575f5ffd5b806314cf7886146100ff57806323a69e75146100ff57806332f23b5b146101145780635bee97a3146100ff575b5f5ffd5b61011261010d3660046109a7565b610139565b005b610127610122366004610a81565b61019f565b60405190815260200160405180910390f35b61014161046c565b61014d84848484610503565b6101997f12d110a66e0c5763793e5d1e64ab8a58a55eab5b86fb83d032af88fce80e258480547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b50505050565b6040805180820190915260208581018083528651870182019183019190915251603486018083525160358701808452516049880184525f9392606090811c92851a151591901c821580610208575073ffffffffffffffffffffffffffffffffffffffff83166001145b80610227575073ffffffffffffffffffffffffffffffffffffffff8116155b1561025e576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff89160361029d5761029d73ffffffffffffffffffffffffffffffffffffffff881633308961055a565b7f12d110a66e0c5763793e5d1e64ab8a58a55eab5b86fb83d032af88fce80e258480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85161790558273ffffffffffffffffffffffffffffffffffffffff1663128acb08828489866103445761033f600173fffd8963efd1fc6a506488495d951d5263988d26610bc6565b610354565b6103546401000276a36001610bf8565b6040805173ffffffffffffffffffffffffffffffffffffffff8f166020820152016040516020818303038152906040526040518663ffffffff1660e01b81526004016103a4959493929190610c70565b60408051808303815f875af11580156103bf573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103e39190610cc8565b50505f61040d7f12d110a66e0c5763793e5d1e64ab8a58a55eab5b86fb83d032af88fce80e258490565b805490915073ffffffffffffffffffffffffffffffffffffffff161561045f576040517fc68f2f1d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050949350505050565b7f12d110a66e0c5763793e5d1e64ab8a58a55eab5b86fb83d032af88fce80e25845473ffffffffffffffffffffffffffffffffffffffff16338114610500576040517f48f89ac500000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff821660248201526044015b60405180910390fd5b50565b5f5f85136105115783610513565b845b90505f81136105225750610199565b5f61052f83850185610cea565b905061055273ffffffffffffffffffffffffffffffffffffffff82163384610636565b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526101999085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610691565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261068c9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016105b4565b505050565b5f6106f2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661079e9092919063ffffffff16565b905080515f14806107125750808060200190518101906107129190610d0c565b61068c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104f7565b60606107ac84845f856107b4565b949350505050565b606082471015610846576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016104f7565b5f5f8673ffffffffffffffffffffffffffffffffffffffff16858760405161086e9190610d2b565b5f6040518083038185875af1925050503d805f81146108a8576040519150601f19603f3d011682016040523d82523d5f602084013e6108ad565b606091505b50915091506108be878383876108c9565b979650505050505050565b6060831561095e5782515f036109575773ffffffffffffffffffffffffffffffffffffffff85163b610957576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104f7565b50816107ac565b6107ac83838151156109735781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f79190610d41565b5f5f5f5f606085870312156109ba575f5ffd5b8435935060208501359250604085013567ffffffffffffffff8111156109de575f5ffd5b8501601f810187136109ee575f5ffd5b803567ffffffffffffffff811115610a04575f5ffd5b876020828401011115610a15575f5ffd5b949793965060200194505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff81168114610500575f5ffd5b8035610a7c81610a50565b919050565b5f5f5f5f60808587031215610a94575f5ffd5b843567ffffffffffffffff811115610aaa575f5ffd5b8501601f81018713610aba575f5ffd5b803567ffffffffffffffff811115610ad457610ad4610a23565b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160116810181811067ffffffffffffffff82111715610b4057610b40610a23565b604052818152828201602001891015610b57575f5ffd5b816020840160208301375f60208383010152809650505050610b7b60208601610a71565b9250610b8960408601610a71565b9396929550929360600135925050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff8281168282160390811115610bf257610bf2610b99565b92915050565b73ffffffffffffffffffffffffffffffffffffffff8181168382160190811115610bf257610bf2610b99565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff86168152841515602082015283604082015273ffffffffffffffffffffffffffffffffffffffff8316606082015260a060808201525f6108be60a0830184610c24565b5f5f60408385031215610cd9575f5ffd5b505080516020909101519092909150565b5f60208284031215610cfa575f5ffd5b8135610d0581610a50565b9392505050565b5f60208284031215610d1c575f5ffd5b81518015158114610d05575f5ffd5b5f82518060208501845e5f920191825250919050565b602081525f610d056020830184610c2456fea2646970667358221220e0a5846615d2a7c772ae1adb73b08a1a5c4c58da4397abfe299908d8d2b6f1a364736f6c634300081d0033";
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
        readonly outputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
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
