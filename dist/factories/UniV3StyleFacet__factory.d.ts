import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { UniV3StyleFacet, UniV3StyleFacetInterface } from "../UniV3StyleFacet";
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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50610da48061001c5f395ff3fe608060405234801561000f575f5ffd5b50600436106100fb575f3560e01c80639feb758b11610093578063be83e10f11610063578063be83e10f146100ff578063e81f56f4146100ff578063fa461e33146100ff578063fa85398b146100ff575f5ffd5b80639feb758b146100ff578063a224ef83146100ff578063ae067e0f146100ff578063b05a3306146100ff575f5ffd5b80636118b15d116100ce5780636118b15d146100ff578063654b6487146100ff57806386cbcd52146100ff5780638ae6e750146100ff575f5ffd5b806314cf7886146100ff57806323a69e75146100ff57806332f23b5b146101145780635bee97a3146100ff575b5f5ffd5b61011261010d3660046109c2565b610127565b005b610112610122366004610a9c565b61018d565b61012f610418565b61013b848484846104af565b6101877f12d110a66e0c5763793e5d1e64ab8a58a55eab5b86fb83d032af88fce80e258480547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b50505050565b835160408051602080880182529287018301928101929092528181019052805180516014820180845251601583018085525160299093018452606091821c925f9190911a600114911c8215806101f7575073ffffffffffffffffffffffffffffffffffffffff8116155b1561022e576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8816036102575761025786333088610506565b7f12d110a66e0c5763793e5d1e64ab8a58a55eab5b86fb83d032af88fce80e258480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85161790558273ffffffffffffffffffffffffffffffffffffffff1663128acb08828488866102fe576102f9600173fffd8963efd1fc6a506488495d951d5263988d26610be1565b61030e565b61030e6401000276a36001610c13565b6040805173ffffffffffffffffffffffffffffffffffffffff8e166020820152016040516020818303038152906040526040518663ffffffff1660e01b815260040161035e959493929190610c8b565b60408051808303815f875af1158015610379573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061039d9190610ce3565b50507f12d110a66e0c5763793e5d1e64ab8a58a55eab5b86fb83d032af88fce80e25845473ffffffffffffffffffffffffffffffffffffffff161561040e576040517f8184471100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050505050565b7f12d110a66e0c5763793e5d1e64ab8a58a55eab5b86fb83d032af88fce80e25845473ffffffffffffffffffffffffffffffffffffffff163381146104ac576040517f48f89ac500000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff821660248201526044015b60405180910390fd5b50565b5f5f85136104bd57836104bf565b845b90505f81136104ce5750610187565b5f6104db83850185610d05565b90506104fe73ffffffffffffffffffffffffffffffffffffffff821633846105c2565b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610553576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105a0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61018773ffffffffffffffffffffffffffffffffffffffff8516848484610654565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905261064f9084906106ac565b505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661069f57637939f4245f526004601cfd5b5f60605260405250505050565b5f61070d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166107b99092919063ffffffff16565b905080515f148061072d57508080602001905181019061072d9190610d27565b61064f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104a3565b60606107c784845f856107cf565b949350505050565b606082471015610861576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016104a3565b5f5f8673ffffffffffffffffffffffffffffffffffffffff1685876040516108899190610d46565b5f6040518083038185875af1925050503d805f81146108c3576040519150601f19603f3d011682016040523d82523d5f602084013e6108c8565b606091505b50915091506108d9878383876108e4565b979650505050505050565b606083156109795782515f036109725773ffffffffffffffffffffffffffffffffffffffff85163b610972576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104a3565b50816107c7565b6107c7838381511561098e5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a39190610d5c565b5f5f5f5f606085870312156109d5575f5ffd5b8435935060208501359250604085013567ffffffffffffffff8111156109f9575f5ffd5b8501601f81018713610a09575f5ffd5b803567ffffffffffffffff811115610a1f575f5ffd5b876020828401011115610a30575f5ffd5b949793965060200194505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff811681146104ac575f5ffd5b8035610a9781610a6b565b919050565b5f5f5f5f60808587031215610aaf575f5ffd5b843567ffffffffffffffff811115610ac5575f5ffd5b8501601f81018713610ad5575f5ffd5b803567ffffffffffffffff811115610aef57610aef610a3e565b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160116810181811067ffffffffffffffff82111715610b5b57610b5b610a3e565b604052818152828201602001891015610b72575f5ffd5b816020840160208301375f60208383010152809650505050610b9660208601610a8c565b9250610ba460408601610a8c565b9396929550929360600135925050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff8281168282160390811115610c0d57610c0d610bb4565b92915050565b73ffffffffffffffffffffffffffffffffffffffff8181168382160190811115610c0d57610c0d610bb4565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff86168152841515602082015283604082015273ffffffffffffffffffffffffffffffffffffffff8316606082015260a060808201525f6108d960a0830184610c3f565b5f5f60408385031215610cf4575f5ffd5b505080516020909101519092909150565b5f60208284031215610d15575f5ffd5b8135610d2081610a6b565b9392505050565b5f60208284031215610d37575f5ffd5b81518015158114610d20575f5ffd5b5f82518060208501845e5f920191825250919050565b602081525f610d206020830184610c3f56fea2646970667358221220b8522e66f0b12ec1d56eebcb4b4e51963ca75998c5f76f651b4bec6356c1e83864736f6c634300081d0033";
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
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SwapCallbackNotExecuted";
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
