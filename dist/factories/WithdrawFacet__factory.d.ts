import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { WithdrawFacet, WithdrawFacetInterface } from "../WithdrawFacet";
type WithdrawFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WithdrawFacet__factory extends ContractFactory {
    constructor(...args: WithdrawFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<WithdrawFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): WithdrawFacet;
    connect(signer: Signer): WithdrawFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506109388061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610064575f3560e01c80638738e4411161004d5780638738e44114610090578063ab8931c7146100db578063d9caed1214610114575f5ffd5b80631458d7ad146100685780637a2b9e461461007d575b5f5ffd5b61007b61007636600461069e565b610127565b005b61007b61008b366004610791565b610266565b60408051808201909152600581527f312e302e3200000000000000000000000000000000000000000000000000000060208201525b6040516100d29190610813565b60405180910390f35b60408051808201909152600d81527f576974686472617746616365740000000000000000000000000000000000000060208201526100c5565b61007b610122366004610866565b61037c565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461016d5761016d6103d2565b5f6017873b11806101aa576040517f09ee12d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff1687876040516101d19291906108a4565b5f604051808303815f865af19150503d805f811461020a576040519150601f19603f3d011682016040523d82523d5f602084013e61020f565b606091505b5090925050811561022a57610225858585610471565b61025c565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146102ac576102ac6103d2565b838114610319576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4c656e677468206d69736d617463680000000000000000000000000000000000604482015260640160405180910390fd5b5f5b848110156103745761036c868683818110610338576103386108b3565b905060200201602081019061034d91906108e0565b85858585818110610360576103606108b3565b90506020020135610471565b60010161031b565b505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146103c2576103c26103d2565b6103cd838383610471565b505050565b5f80357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff90911615151461046e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b5f73ffffffffffffffffffffffffffffffffffffffff8316156104945782610496565b335b90506104a38482846104fc565b6040805173ffffffffffffffffffffffffffffffffffffffff8381168252602082018590528616917f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d1272099910160405180910390a250505050565b73ffffffffffffffffffffffffffffffffffffffff8316610521576103cd828261052c565b6103cd83838361059d565b73ffffffffffffffffffffffffffffffffffffffff8216610579576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61059973ffffffffffffffffffffffffffffffffffffffff83168261060b565b5050565b73ffffffffffffffffffffffffffffffffffffffff82166105ea576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103cd73ffffffffffffffffffffffffffffffffffffffff84168383610624565b5f385f3884865af16105995763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610664576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461046e575f5ffd5b80356106998161066d565b919050565b5f5f5f5f5f5f60a087890312156106b3575f5ffd5b86356106be8161066d565b9550602087013567ffffffffffffffff8111156106d9575f5ffd5b8701601f810189136106e9575f5ffd5b803567ffffffffffffffff8111156106ff575f5ffd5b896020828401011115610710575f5ffd5b602091909101955093506107266040880161068e565b92506107346060880161068e565b95989497509295919493608090920135925050565b5f5f83601f840112610759575f5ffd5b50813567ffffffffffffffff811115610770575f5ffd5b6020830191508360208260051b850101111561078a575f5ffd5b9250929050565b5f5f5f5f5f606086880312156107a5575f5ffd5b853567ffffffffffffffff8111156107bb575f5ffd5b6107c788828901610749565b90965094505060208601356107db8161066d565b9250604086013567ffffffffffffffff8111156107f6575f5ffd5b61080288828901610749565b969995985093965092949392505050565b602081525f82518060208401528060208501604085015e5f6040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011684010191505092915050565b5f5f5f60608486031215610878575f5ffd5b83356108838161066d565b925060208401356108938161066d565b929592945050506040919091013590565b818382375f9101908152919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f602082840312156108f0575f5ffd5b81356108fb8161066d565b939250505056fea26469706673582212209fb808fce9130628ceec94346b5ce92f464220afd683989a905c1f066e636eaf64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "batchWithdraw";
        readonly inputs: readonly [{
            readonly name: "_assetAddresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "executeCallAndWithdraw";
        readonly inputs: readonly [{
            readonly name: "_callTo";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getWithdrawFacetName";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "getWithdrawFacetVersion";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "LogWithdraw";
        readonly inputs: readonly [{
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotAContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "WithdrawFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): WithdrawFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): WithdrawFacet;
}
export {};
