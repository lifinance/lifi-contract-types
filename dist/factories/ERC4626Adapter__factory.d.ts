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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5061092b8061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061004a575f3560e01c806318300a241461004e5780638340f54914610074578063ae1c160c14610087578063d9caed12146100bf575b5f5ffd5b61006161005c3660046107f5565b6100d2565b6040519081526020015b60405180910390f35b61006161008236600461082c565b6101cf565b61009a61009536600461086a565b6103a0565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161006b565b6100616100cd36600461082c565b6104b2565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301525f91908416906307a2d13a9082906370a0823190602401602060405180830381865afa158015610147573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061016b9190610885565b6040518263ffffffff1660e01b815260040161018991815260200190565b602060405180830381865afa1580156101a4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101c89190610885565b9392505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f90819073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa15801561023b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061025f9190610885565b905061026c858585610679565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810184905230602482015273ffffffffffffffffffffffffffffffffffffffff851690636e553f65906044016020604051808303815f875af11580156102dc573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103009190610885565b506040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa158015610369573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061038d9190610885565b610397908261089c565b95945050505050565b5f8173ffffffffffffffffffffffffffffffffffffffff163b5f036103f1576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561043a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061045e91906108da565b905073ffffffffffffffffffffffffffffffffffffffff81166104ad576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f90819073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa15801561051e573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105429190610885565b6040517fb460af94000000000000000000000000000000000000000000000000000000008152600481018590523060248201819052604482015290915073ffffffffffffffffffffffffffffffffffffffff85169063b460af94906064016020604051808303815f875af11580156105bc573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105e09190610885565b506040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152819073ffffffffffffffffffffffffffffffffffffffff8716906370a0823190602401602060405180830381865afa15801561064b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061066f9190610885565b610397919061089c565b6106858383835f610749565b6107445761069683835f6001610749565b6106e9576040517f5274afe700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841660048201526024015b60405180910390fd5b6106f68383836001610749565b610744576040517f5274afe700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841660048201526024016106e0565b505050565b6040517f095ea7b3000000000000000000000000000000000000000000000000000000005f81815273ffffffffffffffffffffffffffffffffffffffff8616600452602485905291602083604481808b5af1925060015f511483166107c55783831516156107b9573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b73ffffffffffffffffffffffffffffffffffffffff811681146107f2575f5ffd5b50565b5f5f60408385031215610806575f5ffd5b8235610811816107d1565b91506020830135610821816107d1565b809150509250929050565b5f5f5f6060848603121561083e575f5ffd5b8335610849816107d1565b92506020840135610859816107d1565b929592945050506040919091013590565b5f6020828403121561087a575f5ffd5b81356101c8816107d1565b5f60208284031215610895575f5ffd5b5051919050565b818103818111156108d4577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b92915050565b5f602082840312156108ea575f5ffd5b81516101c8816107d156fea26469706673582212201d0ea4e292a8d39e89602a70826dc07701e39c7010384307a50363ee8414fe1c64736f6c634300081d0033";
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
            readonly name: "withdrawn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly name: "AssetResolutionFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SafeERC20FailedOperation";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    static createInterface(): ERC4626AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC4626Adapter;
}
export {};
