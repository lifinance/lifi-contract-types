import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Executor, ExecutorInterface } from "../Executor";
declare type ExecutorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Executor__factory extends ContractFactory {
    constructor(...args: ExecutorConstructorParams);
    deploy(_erc20Proxy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Executor>;
    getDeployTransaction(_erc20Proxy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Executor;
    connect(signer: Signer): Executor__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516200235a3803806200235a8339810160408190526100319161007c565b600080546001600160a01b0319166001600160a01b038316908117825560405190917f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a991a2506100ac565b60006020828403121561008e57600080fd5b81516001600160a01b03811681146100a557600080fd5b9392505050565b61229e80620000bc6000396000f3fe60806040526004361061007f5760003560e01c8063a83cbaa31161004e578063a83cbaa314610178578063bc197c811461018b578063f07494a0146101d0578063f23a6e61146101dc57600080fd5b806301ffc9a71461008b578063150b7a02146100c05780634f91bc2b146101115780637f555b031461012657600080fd5b3661008657005b600080fd5b34801561009757600080fd5b506100ab6100a6366004611bbf565b610221565b60405190151581526020015b60405180910390f35b3480156100cc57600080fd5b506100e06100db366004611d39565b6102ba565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100b7565b61012461011f366004611df1565b6102e4565b005b34801561013257600080fd5b506000546101539073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b7565b610124610186366004611e65565b610385565b34801561019757600080fd5b506100e06101a6366004611f56565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b34801561012457600080fd5b3480156101e857600080fd5b506100e06101f7366004612004565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e00000000000000000000000000000000000000000000000000000000014806102b457507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7f150b7a02000000000000000000000000000000000000000000000000000000005b949350505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161035f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001816000018190555061037a868686868660006001610420565b600090555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610400576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556104148787878787876000610420565b60009055505050505050565b60008080888861043160018261206d565b818110610440576104406120a7565b905060200281019061045291906120d6565b610463906080810190606001612114565b905073ffffffffffffffffffffffffffffffffffffffff8116156104915761048a816106f9565b91506104a8565b3461049b826106f9565b6104a5919061206d565b91505b73ffffffffffffffffffffffffffffffffffffffff87161561061b576104cd876106f9565b9250831561057e576040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff89169063dd62ed3e90604401602060405180830381865afa158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c9190612131565b905061057888826107b1565b50610632565b6000546040517f15dacbea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015233602483015230604483015260648201889052909116906315dacbea90608401600060405180830381600087803b1580156105fe57600080fd5b505af1158015610612573d6000803e3d6000fd5b50505050610632565b34610625886106f9565b61062f919061206d565b92505b61063e8a8a8a89610931565b6000610649886106f9565b905083811115610667576106678888610662878561206d565b610c43565b6000610672836106f9565b90508381111561068b5761068b8389610662878561206d565b6040805173ffffffffffffffffffffffffffffffffffffffff808c1682528a1660208201529081018290524260608201528c907fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a2505050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff8216156107aa576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610781573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a59190612131565b6102b4565b4792915050565b806000036107eb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166108445780341015610840576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156108b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d59190612131565b905081811015610920576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61092c83333085610c74565b505050565b8282828160018114610b585760006109498585610e8e565b90506000858561095a60018661206d565b818110610969576109696120a7565b905060200281019061097b91906120d6565b61098c906080810190606001612114565b9050600088815b81811015610a6d5760005473ffffffffffffffffffffffffffffffffffffffff168c8c838181106109c6576109c66120a7565b90506020028101906109d891906120d6565b6109e6906020810190612114565b73ffffffffffffffffffffffffffffffffffffffff1603610a33576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368c8c83818110610a4657610a466120a7565b9050602002810190610a5891906120d6565b9050610a648e82610f9a565b50600101610993565b505060005b610a7d60018661206d565b811015610b4f576000888883818110610a9857610a986120a7565b9050602002810190610aaa91906120d6565b610abb906080810190606001612114565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b4657610af9816106f9565b9250848281518110610b0d57610b0d6120a7565b6020026020010151831115610b4657610b468188878581518110610b3357610b336120a7565b602002602001015186610662919061206d565b50600101610a72565b50505050610c39565b8560005b81811015610c365760005473ffffffffffffffffffffffffffffffffffffffff16898983818110610b8f57610b8f6120a7565b9050602002810190610ba191906120d6565b610baf906020810190612114565b73ffffffffffffffffffffffffffffffffffffffff1603610bfc576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b36898983818110610c0f57610c0f6120a7565b9050602002810190610c2191906120d6565b9050610c2d8b82610f9a565b50600101610b5c565b50505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610c6a5761092c838383611292565b61092c8282611414565b73ffffffffffffffffffffffffffffffffffffffff8416610cc1576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d0e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610d7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da39190612131565b9050610db18286868661153e565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610e21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e459190612131565b610e4f919061206d565b14610e86576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60608160008167ffffffffffffffff811115610eac57610eac611c2d565b604051908082528060200260200182016040528015610ed5578160200160208202803683370190505b5090506000805b83811015610f8f57868682818110610ef657610ef66120a7565b9050602002810190610f0891906120d6565b610f19906080810190606001612114565b9150610f24826106f9565b838281518110610f3657610f366120a7565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f875734838281518110610f6f57610f6f6120a7565b60200260200101818151610f83919061206d565b9052505b600101610edc565b509095945050505050565b610fb0610faa6020830183612114565b3b151590565b610fe6576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611026576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061105561103b6060850160408601612114565b73ffffffffffffffffffffffffffffffffffffffff161590565b611060576000611066565b82608001355b9050600061108261107d6060860160408701612114565b6106f9565b9050600061109961107d6080870160608801612114565b9050826000036110d0576110d06110b66060870160408801612114565b6110c66040880160208901612114565b876080013561161a565b846080013582101561111b576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610917565b60008061112b6020880188612114565b73ffffffffffffffffffffffffffffffffffffffff168561114f60a08a018a61214a565b60405161115d9291906121af565b60006040518083038185875af1925050503d806000811461119a576040519150601f19603f3d011682016040523d82523d6000602084013e61119f565b606091505b5091509150816111b2576111b28161175d565b60006111c761107d60808a0160608b01612114565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896111f860208b018b612114565b61120860608c0160408d01612114565b61121860808d0160608e01612114565b8c6080013589871161122a5786611234565b6112348a8861206d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166112df576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661132c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611399573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113bd9190612131565b905080821115611403576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610917565b61140e848484611767565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611461576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156114a4576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610917565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146114fe576040519150601f19603f3d011682016040523d82523d6000602084013e611503565b606091505b505090508061092c576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261140e9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526117bd565b73ffffffffffffffffffffffffffffffffffffffff831661163a57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611687576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156116fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117209190612131565b101561092c57611732838360006118cc565b61092c83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118cc565b8051602082018181fd5b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261092c9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611598565b600061181f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611a4e9092919063ffffffff16565b905080516000148061184057508080602001905181019061184091906121bf565b61092c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610917565b80158061196c57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611946573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061196a9190612131565b155b6119f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610917565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261092c9084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611598565b60606102dc8484600085856000808673ffffffffffffffffffffffffffffffffffffffff168587604051611a829190612205565b60006040518083038185875af1925050503d8060008114611abf576040519150601f19603f3d011682016040523d82523d6000602084013e611ac4565b606091505b5091509150611ad587838387611ae0565b979650505050505050565b60608315611b76578251600003611b6f5773ffffffffffffffffffffffffffffffffffffffff85163b611b6f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610917565b50816102dc565b6102dc8383815115611b8b5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109179190612217565b600060208284031215611bd157600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611c0157600080fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611c2a57600080fd5b50565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611ca357611ca3611c2d565b604052919050565b600082601f830112611cbc57600080fd5b813567ffffffffffffffff811115611cd657611cd6611c2d565b611d0760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611c5c565b818152846020838601011115611d1c57600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215611d4f57600080fd5b8435611d5a81611c08565b93506020850135611d6a81611c08565b925060408501359150606085013567ffffffffffffffff811115611d8d57600080fd5b611d9987828801611cab565b91505092959194509250565b60008083601f840112611db757600080fd5b50813567ffffffffffffffff811115611dcf57600080fd5b6020830191508360208260051b8501011115611dea57600080fd5b9250929050565b600080600080600060808688031215611e0957600080fd5b85359450602086013567ffffffffffffffff811115611e2757600080fd5b611e3388828901611da5565b9095509350506040860135611e4781611c08565b91506060860135611e5781611c08565b809150509295509295909350565b60008060008060008060a08789031215611e7e57600080fd5b86359550602087013567ffffffffffffffff811115611e9c57600080fd5b611ea889828a01611da5565b9096509450506040870135611ebc81611c08565b92506060870135611ecc81611c08565b80925050608087013590509295509295509295565b600082601f830112611ef257600080fd5b8135602067ffffffffffffffff821115611f0e57611f0e611c2d565b8160051b611f1d828201611c5c565b9283528481018201928281019087851115611f3757600080fd5b83870192505b84831015611ad557823582529183019190830190611f3d565b600080600080600060a08688031215611f6e57600080fd5b8535611f7981611c08565b94506020860135611f8981611c08565b9350604086013567ffffffffffffffff80821115611fa657600080fd5b611fb289838a01611ee1565b94506060880135915080821115611fc857600080fd5b611fd489838a01611ee1565b93506080880135915080821115611fea57600080fd5b50611ff788828901611cab565b9150509295509295909350565b600080600080600060a0868803121561201c57600080fd5b853561202781611c08565b9450602086013561203781611c08565b93506040860135925060608601359150608086013567ffffffffffffffff81111561206157600080fd5b611ff788828901611cab565b818103818111156102b4577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261210a57600080fd5b9190910192915050565b60006020828403121561212657600080fd5b8135611c0181611c08565b60006020828403121561214357600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261217f57600080fd5b83018035915067ffffffffffffffff82111561219a57600080fd5b602001915036819003821315611dea57600080fd5b8183823760009101908152919050565b6000602082840312156121d157600080fd5b81518015158114611c0157600080fd5b60005b838110156121fc5781810151838201526020016121e4565b50506000910152565b6000825161210a8184602087016121e1565b60208152600082518060208401526122368160408501602087016121e1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea264697066735822122041753f8f8fba934d0d689c88380a44e45e49a4d6f396bfe74fc5de504238e10164736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_erc20Proxy";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "bla";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "erc20Proxy";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Proxy";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "onERC1155BatchReceived";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "onERC1155Received";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "onERC721Received";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "supportsInterface";
        readonly inputs: readonly [{
            readonly name: "interfaceId";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "swapAndCompleteBridgeTokens";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_transferredAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndExecute";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_transferredAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "ERC20ProxySet";
        readonly inputs: readonly [{
            readonly name: "proxy";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): ExecutorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Executor;
}
export {};
