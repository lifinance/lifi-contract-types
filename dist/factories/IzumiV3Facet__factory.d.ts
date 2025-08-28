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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50610ac08061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061003f575f3560e01c80630ff3cc86146100435780631878068414610058578063d3e1c2841461006b575b5f5ffd5b61005661005136600461076a565b61007e565b005b610056610066366004610882565b6103db565b610056610079366004610882565b610440565b835160408051602080880182529287018301928101929092528181019052805180516014820180845251601583018085525160299093018452606091821c925f9190911a600114911c8215806100e8575073ffffffffffffffffffffffffffffffffffffffff8116155b8061010257506fffffffffffffffffffffffffffffffff85115b15610139576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8816036101625761016286333088610453565b7ffdcc6c44da30e7c49fd2b43345be3db7f90d50c636b93a701c14974ea66ea61280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff851617905581156102a55773ffffffffffffffffffffffffffffffffffffffff831663857f812f82876102107ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3cb00600161092b565b6040805173ffffffffffffffffffffffffffffffffffffffff8d166020820152016040516020818303038152906040526040518563ffffffff1660e01b815260040161025f9493929190610972565b60408051808303815f875af115801561027a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061029e9190610a05565b5050610362565b73ffffffffffffffffffffffffffffffffffffffff8316632c48125282876102d16001620c3500610a27565b6040805173ffffffffffffffffffffffffffffffffffffffff8d166020820152016040516020818303038152906040526040518563ffffffff1660e01b81526004016103209493929190610972565b60408051808303815f875af115801561033b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061035f9190610a05565b50505b7ffdcc6c44da30e7c49fd2b43345be3db7f90d50c636b93a701c14974ea66ea6125473ffffffffffffffffffffffffffffffffffffffff16156103d1576040517f8184471100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050505050565b6103e361050f565b6103ee8483836105a5565b61043a7ffdcc6c44da30e7c49fd2b43345be3db7f90d50c636b93a701c14974ea66ea61280547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b50505050565b61044861050f565b6103ee8383836105a5565b73ffffffffffffffffffffffffffffffffffffffff84166104a0576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166104ed576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043a73ffffffffffffffffffffffffffffffffffffffff85168484846105f8565b7ffdcc6c44da30e7c49fd2b43345be3db7f90d50c636b93a701c14974ea66ea6125473ffffffffffffffffffffffffffffffffffffffff163381146105a2576040517f48f89ac500000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8216602482015260440160405180910390fd5b50565b825f036105de576040517f28ecba3200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6105eb82840184610a68565b905061043a813386610650565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661064357637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff821661069d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106be73ffffffffffffffffffffffffffffffffffffffff841683836106c3565b505050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610703576390b8ec185f526004601cfd5b5f603452505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff811681146105a2575f5ffd5b803561076581610739565b919050565b5f5f5f5f6080858703121561077d575f5ffd5b843567ffffffffffffffff811115610793575f5ffd5b8501601f810187136107a3575f5ffd5b803567ffffffffffffffff8111156107bd576107bd61070c565b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160116810181811067ffffffffffffffff821117156108295761082961070c565b604052818152828201602001891015610840575f5ffd5b816020840160208301375f602083830101528096505050506108646020860161075a565b92506108726040860161075a565b9396929550929360600135925050565b5f5f5f5f60608587031215610895575f5ffd5b8435935060208501359250604085013567ffffffffffffffff8111156108b9575f5ffd5b8501601f810187136108c9575f5ffd5b803567ffffffffffffffff8111156108df575f5ffd5b8760208284010111156108f0575f5ffd5b949793965060200194505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b600281810b9083900b01627fffff81137fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8000008212171561096c5761096c6108fe565b92915050565b73ffffffffffffffffffffffffffffffffffffffff851681526fffffffffffffffffffffffffffffffff841660208201528260020b6040820152608060608201525f8251806080840152806020850160a085015e5f60a0828501015260a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011684010191505095945050505050565b5f5f60408385031215610a16575f5ffd5b505080516020909101519092909150565b600282810b9082900b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8000008112627fffff8213171561096c5761096c6108fe565b5f60208284031215610a78575f5ffd5b8135610a8381610739565b939250505056fea2646970667358221220431eaad4509706129380ffbfbe36ed290195f6f765d10192aa0ab4c5595b378b64736f6c634300081d0033";
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
        readonly outputs: readonly [];
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
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "IzumiV3SwapCallbackNotPositiveAmount";
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
    }];
    static createInterface(): IzumiV3FacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IzumiV3Facet;
}
export {};
