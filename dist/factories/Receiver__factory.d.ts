import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Receiver, ReceiverInterface } from "../Receiver";
declare type ReceiverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Receiver__factory extends ContractFactory {
    constructor(...args: ReceiverConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _sgRouter: PromiseOrValue<string>, _amarokRouter: PromiseOrValue<string>, _feeCollector: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Receiver>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _sgRouter: PromiseOrValue<string>, _amarokRouter: PromiseOrValue<string>, _feeCollector: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Receiver;
    connect(signer: Signer): Receiver__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162001ece38038062001ece83398101604081905262000034916200009a565b600080546001600160a01b039586166001600160a01b031991821617909155908416608052600380549385169382169390931790925560048054919093169116179055620000f7565b80516001600160a01b03811681146200009557600080fd5b919050565b60008060008060808587031215620000b157600080fd5b620000bc856200007d565b9350620000cc602086016200007d565b9250620000dc604086016200007d565b9150620000ec606086016200007d565b905092959194509250565b608051611dad620001216000396000818161035f015281816108960152610b170152611dad6000f3fe6080604052600436106100ec5760003560e01c80638da5cb5b1161008a578063c415b95c11610059578063c415b95c1461034d578063e30c397814610381578063f2fde38b146103ae578063fd614f41146103ce57600080fd5b80638da5cb5b146102c05780639e573ef3146102ed578063ab8236f31461030d578063b87050271461032d57600080fd5b80633b7c115d116100c65780633b7c115d1461021e57806363f42c8c1461023e5780637200b8291461027e5780637aacd8f81461029357600080fd5b80630517cb76146100f857806323452b9c1461014f5780632f66b7611461016657600080fd5b366100f357005b600080fd5b34801561010457600080fd5b506003546101259073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561015b57600080fd5b506101646103ee565b005b34801561017257600080fd5b5061021061018136600461174f565b805160208083015160408085015160608087015160a088015160809098015184517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000098841b89168189015295831b88166034870152604886019390935260688501529590951b9093166088820152609c808201949094528251808203909401845260bc01909152815191012090565b604051908152602001610146565b34801561022a57600080fd5b506101646102393660046117f9565b6104b8565b34801561024a57600080fd5b5061026e610259366004611831565b60026020526000908152604090205460ff1681565b6040519015158152602001610146565b34801561028a57600080fd5b50610164610695565b34801561029f57600080fd5b506004546101259073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102cc57600080fd5b506000546101259073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102f957600080fd5b5061016461030836600461184a565b61077b565b34801561031957600080fd5b50610164610328366004611920565b6108ea565b34801561033957600080fd5b506101646103483660046119c4565b6109d1565b34801561035957600080fd5b506101257f000000000000000000000000000000000000000000000000000000000000000081565b34801561038d57600080fd5b506001546101259073ffffffffffffffffffffffffffffffffffffffff1681565b3480156103ba57600080fd5b506101646103c9366004611a0f565b610c74565b3480156103da57600080fd5b506101646103e9366004611a33565b610dd2565b60005473ffffffffffffffffffffffffffffffffffffffff16331461043f576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661048e576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610533576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553361054860c0850160a08601611a0f565b73ffffffffffffffffffffffffffffffffffffffff1614610595576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006105a96101813686900386018661174f565b60008181526002602052604090205490915060ff166105f4576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000818152600260205260409081902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055517f663a67f0d165b3f2a205aac294af68a24bdb05d17b1111c3f0b9fc23172017be9061065a9086908690611b2e565b60405180910390a161068c6106726020860186611a0f565b61068260c0870160a08801611a0f565b8660400135610ead565b50600090555050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146106e7576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b42826080013510156107b9576040517f59912c0600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006107cd6101813685900385018561174f565b60008181526002602052604090205490915060ff16610818576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000818152600260205260409081902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055517f1b6b574301273bb99a201c5be4212b54b7602a19e4b9ef87e72d136d7750409c9061087c908590611b5f565b60405180910390a16108bb6108946020850185611a0f565b7f000000000000000000000000000000000000000000000000000000000000000084610ead565b6108e56108cb6020850185611a0f565b6108db60c0860160a08701611a0f565b8560400135610ead565b505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610965576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560035473ffffffffffffffffffffffffffffffffffffffff1633146109ba576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109c5828585610f89565b60009055505050505050565b4282608001351115610a0f576040517f203d82d800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610a236101813685900385018561174f565b60008181526002602052604090205490915060ff16610a6e576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600081815260026020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055610acc91610ab7918701908701611a0f565b610ac760c0870160a08801611a0f565b611110565b90507f1ea282d5e605386b7924381fad71b6b930c8e44f11d9971a9d6bbbfd62ac654e84604051610afd9190611b5f565b60405180910390a1610b40610b156020860186611a0f565b7f00000000000000000000000000000000000000000000000000000000000000008560600135610ead565b6000610b4f6020850185611a0f565b73ffffffffffffffffffffffffffffffffffffffff166040850135610b776020870187611b6d565b604051610b85929190611bd9565b60006040518083038185875af1925050503d8060008114610bc2576040519150601f19603f3d011682016040523d82523d6000602084013e610bc7565b606091505b5050905080610c02576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606085013582610c2b610c1b6040890160208a01611a0f565b610ac760c08a0160a08b01611a0f565b610c359190611be9565b1015610c6d576040517fef57784000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610cc5576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610d12576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610d61576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610e4d576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560045473ffffffffffffffffffffffffffffffffffffffff163314610ea2576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109c5828688610f89565b73ffffffffffffffffffffffffffffffffffffffff8316610f685760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f22576040519150601f19603f3d011682016040523d82523d6000602084013e610f27565b606091505b5050905080610f62576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6108e573ffffffffffffffffffffffffffffffffffffffff841683836111e5565b600083806020019051810190610f9f9190611c23565b9050806000015173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610fe757610fe783826040015184610ead565b60006040518060c00160405280836000015173ffffffffffffffffffffffffffffffffffffffff168152602001836020015173ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018360600151815260200183608001518152602001836040015173ffffffffffffffffffffffffffffffffffffffff16815250905061107781611272565b7f1e052e8da32fe65af08923f4a6c1b66bd4bb645a2623f0d8446c18d9746cda5d816040516111019190600060c08201905073ffffffffffffffffffffffffffffffffffffffff8084511683528060208501511660208401526040840151604084015260608401516060840152608084015160808401528060a08501511660a08401525092915050565b60405180910390a15050505050565b600073ffffffffffffffffffffffffffffffffffffffff8316156111c3576040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301528416906370a0823190602401602060405180830381865afa15801561119a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111be9190611cab565b6111dc565b8173ffffffffffffffffffffffffffffffffffffffff16315b90505b92915050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790526108e59084906113d8565b600061130782805160208083015160408085015160608087015160a088015160809098015184517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000098841b89168189015295831b88166034870152604886019390935260688501529590951b9093166088820152609c808201949094528251808203909401845260bc01909152815191012090565b6000818152600260205260409081902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055519091507f1e052e8da32fe65af08923f4a6c1b66bd4bb645a2623f0d8446c18d9746cda5d906113cc908490600060c08201905073ffffffffffffffffffffffffffffffffffffffff8084511683528060208501511660208401526040840151604084015260608401516060840152608084015160808401528060a08501511660a08401525092915050565b60405180910390a15050565b600061143a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166114ec9092919063ffffffff16565b905080516000148061145b57508080602001905181019061145b9190611cc4565b6108e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b60606114fb8484600085611503565b949350505050565b606082471015611595576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016114e3565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516115be9190611d0a565b60006040518083038185875af1925050503d80600081146115fb576040519150601f19603f3d011682016040523d82523d6000602084013e611600565b606091505b50915091506116118783838761161c565b979650505050505050565b606083156116b25782516000036116ab5773ffffffffffffffffffffffffffffffffffffffff85163b6116ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016114e3565b50816114fb565b6114fb83838151156116c75781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114e39190611d26565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461174c57600080fd5b50565b600060c0828403121561176157600080fd5b60405160c0810181811067ffffffffffffffff82111715611784576117846116fb565b60405282356117928161172a565b815260208301356117a28161172a565b8060208301525060408301356040820152606083013560608201526080830135608082015260a08301356117d58161172a565b60a08201529392505050565b600060c082840312156117f357600080fd5b50919050565b60008060e0838503121561180c57600080fd5b61181684846117e1565b915060c08301356118268161172a565b809150509250929050565b60006020828403121561184357600080fd5b5035919050565b60008060e0838503121561185d57600080fd5b61186784846117e1565b9460c0939093013593505050565b600082601f83011261188657600080fd5b813567ffffffffffffffff808211156118a1576118a16116fb565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156118e7576118e76116fb565b8160405283815286602085880101111561190057600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060008060c0878903121561193957600080fd5b863561ffff8116811461194b57600080fd5b9550602087013567ffffffffffffffff8082111561196857600080fd5b6119748a838b01611875565b9650604089013595506060890135915061198d8261172a565b9093506080880135925060a088013590808211156119aa57600080fd5b506119b789828a01611875565b9150509295509295509295565b60008060e083850312156119d757600080fd5b6119e184846117e1565b915060c083013567ffffffffffffffff8111156119fd57600080fd5b83016080818603121561182657600080fd5b600060208284031215611a2157600080fd5b8135611a2c8161172a565b9392505050565b60008060008060008060c08789031215611a4c57600080fd5b86359550602087013594506040870135611a658161172a565b93506060870135611a758161172a565b9250608087013563ffffffff81168114611a8e57600080fd5b915060a087013567ffffffffffffffff811115611aaa57600080fd5b6119b789828a01611875565b8035611ac18161172a565b73ffffffffffffffffffffffffffffffffffffffff9081168352602082013590611aea8261172a565b808216602085015260408301356040850152606083013560608501526080830135608085015260a08301359150611b208261172a565b80821660a085015250505050565b60e08101611b3c8285611ab6565b73ffffffffffffffffffffffffffffffffffffffff831660c08301529392505050565b60c081016111df8284611ab6565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ba257600080fd5b83018035915067ffffffffffffffff821115611bbd57600080fd5b602001915036819003821315611bd257600080fd5b9250929050565b8183823760009101908152919050565b818103818111156111df577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060a08284031215611c3557600080fd5b60405160a0810181811067ffffffffffffffff82111715611c5857611c586116fb565b6040528251611c668161172a565b81526020830151611c768161172a565b60208201526040830151611c898161172a565b6040820152606083810151908201526080928301519281019290925250919050565b600060208284031215611cbd57600080fd5b5051919050565b600060208284031215611cd657600080fd5b81518015158114611a2c57600080fd5b60005b83811015611d01578181015183820152602001611ce9565b50506000910152565b60008251611d1c818460208701611ce6565b9190910192915050565b6020815260008251806020840152611d45816040850160208701611ce6565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220074058c6287a9532ab4fc26e6f474fdfdae85e484323d7481554f1716508e33064736f6c63430008110033";
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
            readonly name: "_feeCollector";
            readonly type: "address";
            readonly internalType: "address";
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
        readonly name: "cancelIntent";
        readonly inputs: readonly [{
            readonly name: "intent";
            readonly type: "tuple";
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }, {
            readonly name: "refundTo";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "executeIntent";
        readonly inputs: readonly [{
            readonly name: "intent";
            readonly type: "tuple";
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }, {
            readonly name: "exec";
            readonly type: "tuple";
            readonly internalType: "struct IntentReceiver.IntentExecution";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "feeAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "feeCollector";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getIntentId";
        readonly inputs: readonly [{
            readonly name: "intent";
            readonly type: "tuple";
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
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
        readonly name: "refundExpiredIntent";
        readonly inputs: readonly [{
            readonly name: "intent";
            readonly type: "tuple";
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }, {
            readonly name: "feeAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "swapIntents";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
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
            readonly name: "";
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
        readonly name: "ExpiredIntentRefunded";
        readonly inputs: readonly [{
            readonly name: "details";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "IntentAdded";
        readonly inputs: readonly [{
            readonly name: "details";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "IntentCancelled";
        readonly inputs: readonly [{
            readonly name: "details";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }, {
            readonly name: "refundedTo";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "IntentExecuted";
        readonly inputs: readonly [{
            readonly name: "details";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
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
        readonly type: "error";
        readonly name: "BelowMinAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Expired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ExternalCallFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
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
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotYetExpired";
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
