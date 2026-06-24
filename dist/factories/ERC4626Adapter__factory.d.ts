import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC4626Adapter, ERC4626AdapterInterface } from "../ERC4626Adapter";
type ERC4626AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC4626Adapter__factory extends ContractFactory {
    constructor(...args: ERC4626AdapterConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ERC4626Adapter>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ERC4626Adapter;
    connect(signer: Signer): ERC4626Adapter__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5061057b8061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061004a575f3560e01c806318300a241461004e5780638340f54914610074578063ae1c160c14610087578063d9caed12146100bf575b5f5ffd5b61006161005c366004610483565b6100d2565b6040519081526020015b60405180910390f35b6100616100823660046104ba565b6101cf565b61009a6100953660046104f8565b610279565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161006b565b6100616100cd3660046104ba565b610376565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301525f91908416906307a2d13a9082906370a0823190602401602060405180830381865afa158015610147573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061016b9190610513565b6040518263ffffffff1660e01b815260040161018991815260200190565b602060405180830381865afa1580156101a4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101c89190610513565b9392505050565b5f6101db8484846103d8565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810183905230602482015273ffffffffffffffffffffffffffffffffffffffff841690636e553f65906044015b6020604051808303815f875af115801561024c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102709190610513565b50909392505050565b5f6017823b116102b5576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102fe573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610322919061052a565b905073ffffffffffffffffffffffffffffffffffffffff8116610371576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b6040517fb460af9400000000000000000000000000000000000000000000000000000000815260048101829052306024820181905260448201525f9073ffffffffffffffffffffffffffffffffffffffff84169063b460af9490606401610230565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610456575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661045657633e3f8f735f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610480575f5ffd5b50565b5f5f60408385031215610494575f5ffd5b823561049f8161045f565b915060208301356104af8161045f565b809150509250929050565b5f5f5f606084860312156104cc575f5ffd5b83356104d78161045f565b925060208401356104e78161045f565b929592945050506040919091013590565b5f60208284031215610508575f5ffd5b81356101c88161045f565b5f60208284031215610523575f5ffd5b5051919050565b5f6020828403121561053a575f5ffd5b81516101c88161045f56fea2646970667358221220e90b3658f0ef4be5dd34e777c6baa7be139caef0e1deaa5d90bfe0231e948fe064736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "_asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "deposited";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "resolveAsset";
        readonly inputs: readonly [{
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalAssets";
        readonly inputs: readonly [{
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_holder";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "withdrawn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly name: "AssetResolutionFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): ERC4626AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC4626Adapter;
}
export {};
