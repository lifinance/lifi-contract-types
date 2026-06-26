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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506108458061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061004a575f3560e01c806318300a241461004e5780638340f54914610074578063ae1c160c14610087578063d9caed12146100bf575b5f5ffd5b61006161005c36600461070f565b6100d2565b6040519081526020015b60405180910390f35b610061610082366004610746565b6101cf565b61009a610095366004610784565b6103a0565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161006b565b6100616100cd366004610746565b61049d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301525f91908416906307a2d13a9082906370a0823190602401602060405180830381865afa158015610147573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061016b919061079f565b6040518263ffffffff1660e01b815260040161018991815260200190565b602060405180830381865afa1580156101a4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101c8919061079f565b9392505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f90819073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa15801561023b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061025f919061079f565b905061026c858585610664565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810184905230602482015273ffffffffffffffffffffffffffffffffffffffff851690636e553f65906044016020604051808303815f875af11580156102dc573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610300919061079f565b506040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa158015610369573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061038d919061079f565b61039790826107b6565b95945050505050565b5f6017823b116103dc576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610425573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061044991906107f4565b905073ffffffffffffffffffffffffffffffffffffffff8116610498576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f90819073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa158015610509573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061052d919061079f565b6040517fb460af94000000000000000000000000000000000000000000000000000000008152600481018590523060248201819052604482015290915073ffffffffffffffffffffffffffffffffffffffff85169063b460af94906064016020604051808303815f875af11580156105a7573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105cb919061079f565b506040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152819073ffffffffffffffffffffffffffffffffffffffff8716906370a0823190602401602060405180830381865afa158015610636573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061065a919061079f565b61039791906107b6565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166106e2575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166106e257633e3f8f735f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461070c575f5ffd5b50565b5f5f60408385031215610720575f5ffd5b823561072b816106eb565b9150602083013561073b816106eb565b809150509250929050565b5f5f5f60608486031215610758575f5ffd5b8335610763816106eb565b92506020840135610773816106eb565b929592945050506040919091013590565b5f60208284031215610794575f5ffd5b81356101c8816106eb565b5f602082840312156107af575f5ffd5b5051919050565b818103818111156107ee577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b92915050565b5f60208284031215610804575f5ffd5b81516101c8816106eb56fea26469706673582212202e880cc0544c933ecdc87543f98af5125419dc95a04a9f969a9b13e7ab76bcf664736f6c634300081d0033";
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
    }];
    static createInterface(): ERC4626AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC4626Adapter;
}
export {};
