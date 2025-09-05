import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { NativeWrapperFacet, NativeWrapperFacetInterface } from "../NativeWrapperFacet";
type NativeWrapperFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NativeWrapperFacet__factory extends ContractFactory {
    constructor(...args: NativeWrapperFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<NativeWrapperFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): NativeWrapperFacet;
    connect(signer: Signer): NativeWrapperFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5061063c8061001c5f395ff3fe608060405260043610610028575f3560e01c806331ce21c71461002c5780637d545ff814610041575b5f5ffd5b61003f61003a3660046104ee565b610060565b005b34801561004c575f5ffd5b5061003f61005b3660046104ee565b61015f565b83516040805160208088018252928701830192810192909252818101905280518051601482018084525160289092018352606090811c91901c816100d0576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663d0e30db0856040518263ffffffff1660e01b81526004015f604051808303818588803b158015610116575f5ffd5b505af1158015610128573d5f5f3e3d5ffd5b5050505073ffffffffffffffffffffffffffffffffffffffff82163014905061015657610156828286610239565b50505050505050565b602084015160601c3373ffffffffffffffffffffffffffffffffffffffff85160361019057610190833330856102ac565b6040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff841690632e1a7d4d906024015f604051808303815f87803b1580156101f5575f5ffd5b505af1158015610207573d5f5f3e3d5ffd5b5050505073ffffffffffffffffffffffffffffffffffffffff8116301461023257610232818361036e565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610286576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102a773ffffffffffffffffffffffffffffffffffffffff841683836103df565b505050565b73ffffffffffffffffffffffffffffffffffffffff84166102f9576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610346576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61036873ffffffffffffffffffffffffffffffffffffffff8516848484610428565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166103bb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103db73ffffffffffffffffffffffffffffffffffffffff831682610480565b5050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661041f576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661047357637939f4245f526004601cfd5b5f60605260405250505050565b5f385f3884865af16103db5763b12d13eb5f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b803573ffffffffffffffffffffffffffffffffffffffff811681146104e9575f5ffd5b919050565b5f5f5f5f60808587031215610501575f5ffd5b843567ffffffffffffffff811115610517575f5ffd5b8501601f81018713610527575f5ffd5b803567ffffffffffffffff81111561054157610541610499565b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160116810181811067ffffffffffffffff821117156105ad576105ad610499565b6040528181528282016020018910156105c4575f5ffd5b816020840160208301375f602083830101528096505050506105e8602086016104c6565b92506105f6604086016104c6565b939692955092936060013592505056fea264697066735822122044037d7e595392d379af842892ba2ab2cdcecbb72f874b71d1a4fb9f17696df464736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "unwrapNative";
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
        readonly name: "wrapNative";
        readonly inputs: readonly [{
            readonly name: "swapData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
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
    }];
    static createInterface(): NativeWrapperFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NativeWrapperFacet;
}
export {};
