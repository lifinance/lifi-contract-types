import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Receiver, ReceiverInterface } from "../Receiver";
declare type ReceiverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Receiver__factory extends ContractFactory {
    constructor(...args: ReceiverConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _sgRouter: PromiseOrValue<string>, _amarokRouter: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Receiver>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _sgRouter: PromiseOrValue<string>, _amarokRouter: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Receiver;
    connect(signer: Signer): Receiver__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200257b3803806200257b833981016040819052620000349162000134565b600080546001600160a01b038088166001600160a01b031992831617835560028054888316908416811790915560058054888416908516179055600380549287169290931691909117909155600483905560405190917f806d08432293677cc7e3e0f9443dcf0459f82567573d5094da6e9e6129dea4ab91a26040516001600160a01b038416907fcc6aaf791b8b7c6167981db821320441082903e27343e380dca76afd5807577d90600090a260405181907ffd178559652d65eca585044f34f8688859896a9bebaa7530dbe97c5c527320d590600090a250505050506200019b565b80516001600160a01b03811681146200012f57600080fd5b919050565b600080600080600060a086880312156200014d57600080fd5b620001588662000117565b9450620001686020870162000117565b9350620001786040870162000117565b9250620001886060870162000117565b9150608086015190509295509295909350565b6123d080620001ab6000396000f3fe6080604052600436106100d65760003560e01c80638da5cb5b1161007f578063c34c08e511610059578063c34c08e514610236578063e30c397814610263578063f2fde38b14610290578063fd614f41146102b057600080fd5b80638da5cb5b146101c5578063ab8236f3146101f2578063bcf225e61461021257600080fd5b80634f91bc2b116100b05780634f91bc2b146101705780637200b829146101835780637aacd8f81461019857600080fd5b80630517cb76146100e257806323452b9c146101395780632e1445791461015057600080fd5b366100dd57005b600080fd5b3480156100ee57600080fd5b5060025461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561014557600080fd5b5061014e6102d0565b005b34801561015c57600080fd5b5061014e61016b366004611a1b565b61039a565b61014e61017e366004611bdc565b6104cc565b34801561018f57600080fd5b5061014e610638565b3480156101a457600080fd5b5060055461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101d157600080fd5b5060005461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101fe57600080fd5b5061014e61020d366004611d6e565b61071e565b34801561021e57600080fd5b5061022860045481565b604051908152602001610130565b34801561024257600080fd5b5060035461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561026f57600080fd5b5060015461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561029c57600080fd5b5061014e6102ab366004611e12565b610869565b3480156102bc57600080fd5b5061014e6102cb366004611e36565b6109c7565b60005473ffffffffffffffffffffffffffffffffffffffff163314610321576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610370576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103eb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166104a65760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610460576040519150601f19603f3d011682016040523d82523d6000602084013e610465565b606091505b50509050806104a0576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6104c773ffffffffffffffffffffffffffffffffffffffff84168383610adf565b505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610547576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815573ffffffffffffffffffffffffffffffffffffffff831661057a5761057585858585346000610bb3565b61062e565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff85169063dd62ed3e90604401602060405180830381865afa1580156105ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106119190611eb9565b905061061d8482611034565b61062c86868686856000610bb3565b505b6000905550505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461068a576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610799576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560025473ffffffffffffffffffffffffffffffffffffffff1633146107ee576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806000848060200190518101906108079190612098565b925092509250600061081983886111af565b90506108588482600084511161082f578a61084f565b83600081518110610842576108426120f3565b6020026020010151604001515b858b6001610bb3565b505060009092555050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108ba576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610907576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610956576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610a42576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560055473ffffffffffffffffffffffffffffffffffffffff163314610a97576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008083806020019051810190610aae9190612122565b915091506000610abe838a6111af565b9050610acf8a828a858d6000610bb3565b5050600090915550505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526104c79084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526111dd565b600081610bc1576000610bc5565b6004545b905073ffffffffffffffffffffffffffffffffffffffff8516610e795760005a9050828015610bf357508181105b15610cfa5760008573ffffffffffffffffffffffffffffffffffffffff168560405160006040518083038185875af1925050503d8060008114610c52576040519150601f19603f3d011682016040523d82523d6000602084013e610c57565b606091505b5050905080610c92576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a250505061102c565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b85610d2385856121a3565b908b8b8b8b6040518763ffffffff1660e01b8152600401610d479493929190612200565b6000604051808303818589803b158015610d6057600080fd5b5088f19450505050508015610d73575060015b610e735760008573ffffffffffffffffffffffffffffffffffffffff168560405160006040518083038185875af1925050503d8060008114610dd1576040519150601f19603f3d011682016040523d82523d6000602084013e610dd6565b606091505b5050905080610e11576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2505b5061102a565b60005a6003549091508690610ea99073ffffffffffffffffffffffffffffffffffffffff808416911660006112ec565b838015610eb557508282105b15610edb57610c9273ffffffffffffffffffffffffffffffffffffffff82168787610adf565b600354610f029073ffffffffffffffffffffffffffffffffffffffff83811691168761146e565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b610f2a85856121a3565b8b8b8b8b6040518663ffffffff1660e01b8152600401610f4d9493929190612200565b600060405180830381600088803b158015610f6757600080fd5b5087f193505050508015610f79575060015b610fff57610f9e73ffffffffffffffffffffffffffffffffffffffff82168787610adf565b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b6003546110279073ffffffffffffffffffffffffffffffffffffffff838116911660006112ec565b50505b505b505050505050565b8060000361106e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110c757803410156110c3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611134573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111589190611eb9565b9050818110156111a3576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6104c783333085611567565b606081836000815181106111c5576111c56120f3565b60209081029190910101516080015250815b92915050565b600061123f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166117799092919063ffffffff16565b9050805160001480611260575080806020019051810190611260919061233b565b6104c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161119a565b80158061138c57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611366573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138a9190611eb9565b155b611418576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161119a565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526104c79084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610b31565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156114e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115089190611eb9565b90506104a0847f095ea7b3000000000000000000000000000000000000000000000000000000008561153a8686612358565b60405173ffffffffffffffffffffffffffffffffffffffff90921660248301526044820152606401610b31565b73ffffffffffffffffffffffffffffffffffffffff84166115b4576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611601576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611672573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116969190611eb9565b90506116a482868686611790565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611714573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117389190611eb9565b61174291906121a3565b1461102c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606061178884846000856117ee565b949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526104a09085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610b31565b606082471015611880576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161119a565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516118a9919061236b565b60006040518083038185875af1925050503d80600081146118e6576040519150601f19603f3d011682016040523d82523d6000602084013e6118eb565b606091505b50915091506118fc87838387611907565b979650505050505050565b6060831561199d5782516000036119965773ffffffffffffffffffffffffffffffffffffffff85163b611996576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161119a565b5081611788565b61178883838151156119b25781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161119a9190612387565b73ffffffffffffffffffffffffffffffffffffffff81168114611a0857600080fd5b50565b8035611a16816119e6565b919050565b600080600060608486031215611a3057600080fd5b8335611a3b816119e6565b92506020840135611a4b816119e6565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611aae57611aae611a5c565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611afb57611afb611a5c565b604052919050565b600067ffffffffffffffff821115611b1d57611b1d611a5c565b5060051b60200190565b600067ffffffffffffffff821115611b4157611b41611a5c565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611b7e57600080fd5b8135611b91611b8c82611b27565b611ab4565b818152846020838601011115611ba657600080fd5b816020850160208301376000918101602001919091529392505050565b8015158114611a0857600080fd5b8035611a1681611bc3565b60008060008060808587031215611bf257600080fd5b84359350602085013567ffffffffffffffff80821115611c1157600080fd5b818701915087601f830112611c2557600080fd5b8135611c33611b8c82611b03565b8082825260208201915060208360051b86010192508a831115611c5557600080fd5b602085015b83811015611d40578481351115611c7057600080fd5b8035860160e07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828f03011215611ca657600080fd5b611cae611a8b565b611cba60208301611a0b565b8152611cc860408301611a0b565b6020820152611cd960608301611a0b565b6040820152611cea60808301611a0b565b606082015260a0820135608082015260c082013587811115611d0b57600080fd5b611d1a8f602083860101611b6d565b60a083015250611d2c60e08301611bd1565b60c082015284525060209283019201611c5a565b508097505050505050611d5560408601611a0b565b9150611d6360608601611a0b565b905092959194509250565b60008060008060008060c08789031215611d8757600080fd5b863561ffff81168114611d9957600080fd5b9550602087013567ffffffffffffffff80821115611db657600080fd5b611dc28a838b01611b6d565b96506040890135955060608901359150611ddb826119e6565b9093506080880135925060a08801359080821115611df857600080fd5b50611e0589828a01611b6d565b9150509295509295509295565b600060208284031215611e2457600080fd5b8135611e2f816119e6565b9392505050565b60008060008060008060c08789031215611e4f57600080fd5b86359550602087013594506040870135611e68816119e6565b93506060870135611e78816119e6565b9250608087013563ffffffff81168114611e9157600080fd5b915060a087013567ffffffffffffffff811115611ead57600080fd5b611e0589828a01611b6d565b600060208284031215611ecb57600080fd5b5051919050565b8051611a16816119e6565b60005b83811015611ef8578181015183820152602001611ee0565b50506000910152565b600082601f830112611f1257600080fd5b8151611f20611b8c82611b27565b818152846020838601011115611f3557600080fd5b611788826020830160208701611edd565b8051611a1681611bc3565b600082601f830112611f6257600080fd5b81516020611f72611b8c83611b03565b82815260059290921b84018101918181019086841115611f9157600080fd5b8286015b8481101561208d57805167ffffffffffffffff80821115611fb65760008081fd5b818901915060e0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848d03011215611fef5760008081fd5b611ff7611a8b565b612002888501611ed2565b81526040612011818601611ed2565b898301526060612022818701611ed2565b8284015260809150612035828701611ed2565b818401525060a0808601518284015260c09150818601518581111561205a5760008081fd5b6120688f8c838a0101611f01565b828501525050612079838601611f46565b908201528652505050918301918301611f95565b509695505050505050565b6000806000606084860312156120ad57600080fd5b83519250602084015167ffffffffffffffff8111156120cb57600080fd5b6120d786828701611f51565b92505060408401516120e8816119e6565b809150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000806040838503121561213557600080fd5b825167ffffffffffffffff81111561214c57600080fd5b61215885828601611f51565b9250506020830151612169816119e6565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156111d7576111d7612174565b600081518084526121ce816020860160208601611edd565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b838110156122eb577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e0898601819052906122bf828701826121b6565b91505060c08083015192506122d78187018415159052565b50958701959350509085019060010161222e565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550612316945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b60006020828403121561234d57600080fd5b8151611e2f81611bc3565b808201808211156111d7576111d7612174565b6000825161237d818460208701611edd565b9190910192915050565b602081526000611e2f60208301846121b656fea264697066735822122042960bd2703a4c76e8703833a364686aea62547a6c9b24817c33896dd1fda72a64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_sgRouter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amarokRouter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_recoverGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "amarokRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "executor";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IExecutor";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pullToken";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "recoverGas";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "sgReceive";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amountLD";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_payload";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sgRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
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
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "xReceive";
        readonly inputs: readonly [{
            readonly name: "_transferId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "AmarokRouterSet";
        readonly inputs: readonly [{
            readonly name: "router";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ExecutorSet";
        readonly inputs: readonly [{
            readonly name: "executor";
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
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RecoverGasSet";
        readonly inputs: readonly [{
            readonly name: "recoverGas";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "StargateRouterSet";
        readonly inputs: readonly [{
            readonly name: "router";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "ExternalCallFailed";
        readonly inputs: readonly [];
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
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
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
    static createInterface(): ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Receiver;
}
export {};
