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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50610acc8061001c5f395ff3fe608060405260043610610033575f3560e01c80630ff3cc8614610037578063187806841461004c578063d3e1c2841461006b575b5f5ffd5b61004a610045366004610776565b61008a565b005b348015610057575f5ffd5b5061004a61006636600461088e565b6103e7565b348015610076575f5ffd5b5061004a61008536600461088e565b61044c565b835160408051602080880182529287018301928101929092528181019052805180516014820180845251601583018085525160299093018452606091821c925f9190911a600114911c8215806100f4575073ffffffffffffffffffffffffffffffffffffffff8116155b8061010e57506fffffffffffffffffffffffffffffffff85115b15610145576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff88160361016e5761016e8633308861045f565b7ffdcc6c44da30e7c49fd2b43345be3db7f90d50c636b93a701c14974ea66ea61280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff851617905581156102b15773ffffffffffffffffffffffffffffffffffffffff831663857f812f828761021c7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3cb006001610937565b6040805173ffffffffffffffffffffffffffffffffffffffff8d166020820152016040516020818303038152906040526040518563ffffffff1660e01b815260040161026b949392919061097e565b60408051808303815f875af1158015610286573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102aa9190610a11565b505061036e565b73ffffffffffffffffffffffffffffffffffffffff8316632c48125282876102dd6001620c3500610a33565b6040805173ffffffffffffffffffffffffffffffffffffffff8d166020820152016040516020818303038152906040526040518563ffffffff1660e01b815260040161032c949392919061097e565b60408051808303815f875af1158015610347573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061036b9190610a11565b50505b7ffdcc6c44da30e7c49fd2b43345be3db7f90d50c636b93a701c14974ea66ea6125473ffffffffffffffffffffffffffffffffffffffff16156103dd576040517f8184471100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050505050565b6103ef61051b565b6103fa8483836105b1565b6104467ffdcc6c44da30e7c49fd2b43345be3db7f90d50c636b93a701c14974ea66ea61280547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b50505050565b61045461051b565b6103fa8383836105b1565b73ffffffffffffffffffffffffffffffffffffffff84166104ac576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166104f9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61044673ffffffffffffffffffffffffffffffffffffffff8516848484610604565b7ffdcc6c44da30e7c49fd2b43345be3db7f90d50c636b93a701c14974ea66ea6125473ffffffffffffffffffffffffffffffffffffffff163381146105ae576040517f48f89ac500000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8216602482015260440160405180910390fd5b50565b825f036105ea576040517f28ecba3200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6105f782840184610a74565b905061044681338661065c565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661064f57637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff82166106a9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106ca73ffffffffffffffffffffffffffffffffffffffff841683836106cf565b505050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661070f576390b8ec185f526004601cfd5b5f603452505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff811681146105ae575f5ffd5b803561077181610745565b919050565b5f5f5f5f60808587031215610789575f5ffd5b843567ffffffffffffffff81111561079f575f5ffd5b8501601f810187136107af575f5ffd5b803567ffffffffffffffff8111156107c9576107c9610718565b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160116810181811067ffffffffffffffff8211171561083557610835610718565b60405281815282820160200189101561084c575f5ffd5b816020840160208301375f6020838301015280965050505061087060208601610766565b925061087e60408601610766565b9396929550929360600135925050565b5f5f5f5f606085870312156108a1575f5ffd5b8435935060208501359250604085013567ffffffffffffffff8111156108c5575f5ffd5b8501601f810187136108d5575f5ffd5b803567ffffffffffffffff8111156108eb575f5ffd5b8760208284010111156108fc575f5ffd5b949793965060200194505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b600281810b9083900b01627fffff81137fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff800000821217156109785761097861090a565b92915050565b73ffffffffffffffffffffffffffffffffffffffff851681526fffffffffffffffffffffffffffffffff841660208201528260020b6040820152608060608201525f8251806080840152806020850160a085015e5f60a0828501015260a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011684010191505095945050505050565b5f5f60408385031215610a22575f5ffd5b505080516020909101519092909150565b600282810b9082900b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8000008112627fffff821317156109785761097861090a565b5f60208284031215610a84575f5ffd5b8135610a8f81610745565b939250505056fea26469706673582212200dd9e025be060830dc60f40bd41f51973bdd4a7ffe341296e67fdb1e2868ee3164736f6c634300081d0033";
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
        readonly stateMutability: "payable";
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
