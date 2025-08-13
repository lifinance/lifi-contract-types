import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { IzumiV3Facet, IzumiV3FacetInterface } from "../IzumiV3Facet";
type IzumiV3FacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class IzumiV3Facet__factory extends ContractFactory {
    constructor(...args: IzumiV3FacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<IzumiV3Facet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): IzumiV3Facet;
    connect(signer: Signer): IzumiV3Facet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50610d548061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061003f575f3560e01c80630ff3cc86146100435780631878068414610068578063d3e1c2841461007d575b5f5ffd5b6100566100513660046109a5565b610090565b60405190815260200160405180910390f35b61007b610076366004610abd565b610428565b005b61007b61008b366004610abd565b610439565b6040805180820190915260208581018083528651870182019183019190915251603486018083525160358701808452516049880184525f9392606090811c92851a91901c8215806100f5575073ffffffffffffffffffffffffffffffffffffffff8116155b8061010f57506fffffffffffffffffffffffffffffffff86115b15610146576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8916036101855761018573ffffffffffffffffffffffffffffffffffffffff8816333089610444565b7f12d110a66e0c5763793e5d1e64ab8a58a55eab5b86fb83d032af88fce80e258480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85161790557fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60ff8316016102ec5773ffffffffffffffffffffffffffffffffffffffff831663857f812f82886102577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3cb006001610b66565b6040805173ffffffffffffffffffffffffffffffffffffffff8e166020820152016040516020818303038152906040526040518563ffffffff1660e01b81526004016102a69493929190610bf9565b60408051808303815f875af11580156102c1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102e59190610c52565b50506103a9565b73ffffffffffffffffffffffffffffffffffffffff8316632c48125282886103186001620c3500610c74565b6040805173ffffffffffffffffffffffffffffffffffffffff8e166020820152016040516020818303038152906040526040518563ffffffff1660e01b81526004016103679493929190610bf9565b60408051808303815f875af1158015610382573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103a69190610c52565b50505b7f12d110a66e0c5763793e5d1e64ab8a58a55eab5b86fb83d032af88fce80e25845473ffffffffffffffffffffffffffffffffffffffff1615610418576040517fc2284f3700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f9450505050505b949350505050565b610433848383610520565b50505050565b610433838383610520565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526104339085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526105dd565b6105286106f4565b825f03610561576040517f28ecba3200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61056e82840184610cb5565b905061059173ffffffffffffffffffffffffffffffffffffffff82163386610786565b6104337f12d110a66e0c5763793e5d1e64ab8a58a55eab5b86fb83d032af88fce80e258480547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f61063e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166107dc9092919063ffffffff16565b905080515f148061065e57508080602001905181019061065e9190610cd7565b6106ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b505050565b7f12d110a66e0c5763793e5d1e64ab8a58a55eab5b86fb83d032af88fce80e25845473ffffffffffffffffffffffffffffffffffffffff16338114610783576040517f48f89ac500000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff821660248201526044016106e6565b50565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106ef9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161049e565b606061042084845f85855f5f8673ffffffffffffffffffffffffffffffffffffffff16858760405161080e9190610cf6565b5f6040518083038185875af1925050503d805f8114610848576040519150601f19603f3d011682016040523d82523d5f602084013e61084d565b606091505b509150915061085e87838387610869565b979650505050505050565b606083156108fe5782515f036108f75773ffffffffffffffffffffffffffffffffffffffff85163b6108f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106e6565b5081610420565b61042083838151156109135781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e69190610d0c565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff81168114610783575f5ffd5b80356109a081610974565b919050565b5f5f5f5f608085870312156109b8575f5ffd5b843567ffffffffffffffff8111156109ce575f5ffd5b8501601f810187136109de575f5ffd5b803567ffffffffffffffff8111156109f8576109f8610947565b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160116810181811067ffffffffffffffff82111715610a6457610a64610947565b604052818152828201602001891015610a7b575f5ffd5b816020840160208301375f60208383010152809650505050610a9f60208601610995565b9250610aad60408601610995565b9396929550929360600135925050565b5f5f5f5f60608587031215610ad0575f5ffd5b8435935060208501359250604085013567ffffffffffffffff811115610af4575f5ffd5b8501601f81018713610b04575f5ffd5b803567ffffffffffffffff811115610b1a575f5ffd5b876020828401011115610b2b575f5ffd5b949793965060200194505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b600281810b9083900b01627fffff81137fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80000082121715610ba757610ba7610b39565b92915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff851681526fffffffffffffffffffffffffffffffff841660208201528260020b6040820152608060608201525f610c486080830184610bad565b9695505050505050565b5f5f60408385031215610c63575f5ffd5b505080516020909101519092909150565b600282810b9082900b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8000008112627fffff82131715610ba757610ba7610b39565b5f60208284031215610cc5575f5ffd5b8135610cd081610974565b9392505050565b5f60208284031215610ce7575f5ffd5b81518015158114610cd0575f5ffd5b5f82518060208501845e5f920191825250919050565b602081525f610cd06020830184610bad56fea26469706673582212208622f36b8d02fb590a818c34ec79138b754f2c7e3b9fe7537aede83f8267356464736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "swapIzumiV3";
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
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapX2YCallback";
        readonly inputs: readonly [{
            readonly name: "amountX";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapY2XCallback";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountY";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "IzumiV3SwapCallbackNotPositiveAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "IzumiV3SwapCallbackUnknownSource";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "IzumiV3SwapUnexpected";
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
    }];
    static createInterface(): IzumiV3FacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IzumiV3Facet;
}
export {};
