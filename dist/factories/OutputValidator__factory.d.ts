import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OutputValidator, OutputValidatorInterface } from "../OutputValidator";
type OutputValidatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OutputValidator__factory extends ContractFactory {
    constructor(...args: OutputValidatorConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OutputValidator>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OutputValidator;
    connect(signer: Signer): OutputValidator__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506104bf8061001c5f395ff3fe608060405260043610610028575f3560e01c806327444dab1461002c5780635d865df21461004d575b5f5ffd5b348015610037575f5ffd5b5061004b6100463660046103b6565b610060565b005b61004b61005b3660046103ef565b610177565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f90839073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa1580156100cc573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906100f09190610419565b6100fa919061045d565b905080156101715773ffffffffffffffffffffffffffffffffffffffff821661014f576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61017173ffffffffffffffffffffffffffffffffffffffff85163384846101c5565b50505050565b5f826101833447610476565b61018d919061045d565b90503481106101a6576101a15f833461021d565b505050565b6101b15f838361021d565b6101a15f336101c0843461045d565b61021d565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661021057637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff8316610242576101a1828261024d565b6101a18383836102be565b73ffffffffffffffffffffffffffffffffffffffff821661029a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ba73ffffffffffffffffffffffffffffffffffffffff83168261032c565b5050565b73ffffffffffffffffffffffffffffffffffffffff821661030b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101a173ffffffffffffffffffffffffffffffffffffffff84168383610345565b5f385f3884865af16102ba5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610385576390b8ec185f526004601cfd5b5f603452505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146103b1575f5ffd5b919050565b5f5f5f606084860312156103c8575f5ffd5b6103d18461038e565b9250602084013591506103e66040850161038e565b90509250925092565b5f5f60408385031215610400575f5ffd5b823591506104106020840161038e565b90509250929050565b5f60208284031215610429575f5ffd5b5051919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b8181038181111561047057610470610430565b92915050565b808201808211156104705761047061043056fea2646970667358221220129b592e644220f55c9c964b3a0bf1e646acfb968a12cd0f41f9d11d05359ee164736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "validateERC20Output";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "expectedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "validationWalletAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "validateNativeOutput";
        readonly inputs: readonly [{
            readonly name: "expectedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "validationWalletAddress";
            readonly type: "address";
            readonly internalType: "address";
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
    }];
    static createInterface(): OutputValidatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OutputValidator;
}
export {};
