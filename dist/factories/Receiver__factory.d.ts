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
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200288538038062002885833981016040819052620000349162000134565b600080546001600160a01b038088166001600160a01b031992831617835560028054888316908416811790915560058054888416908516179055600380549287169290931691909117909155600483905560405190917f806d08432293677cc7e3e0f9443dcf0459f82567573d5094da6e9e6129dea4ab91a26040516001600160a01b038416907fcc6aaf791b8b7c6167981db821320441082903e27343e380dca76afd5807577d90600090a260405181907ffd178559652d65eca585044f34f8688859896a9bebaa7530dbe97c5c527320d590600090a250505050506200019b565b80516001600160a01b03811681146200012f57600080fd5b919050565b600080600080600060a086880312156200014d57600080fd5b620001588662000117565b9450620001686020870162000117565b9350620001786040870162000117565b9250620001886060870162000117565b9150608086015190509295509295909350565b6126da80620001ab6000396000f3fe6080604052600436106101125760003560e01c80637aacd8f8116100a5578063bcf225e611610074578063e30c397811610059578063e30c39781461031f578063f2fde38b1461034c578063fd614f411461036c57600080fd5b8063bcf225e6146102ce578063c34c08e5146102f257600080fd5b80637aacd8f8146102345780638199c105146102615780638da5cb5b14610281578063ab8236f3146102ae57600080fd5b80633184cc22116100e15780633184cc22146101cc5780634f91bc2b146101ec57806351b78b47146101ff5780637200b8291461021f57600080fd5b80630517cb761461011e5780631c3c0ea81461017557806323452b9c146101975780632e144579146101ac57600080fd5b3661011957005b600080fd5b34801561012a57600080fd5b5060025461014b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561018157600080fd5b50610195610190366004611d23565b61038c565b005b3480156101a357600080fd5b5061019561044c565b3480156101b857600080fd5b506101956101c7366004611d47565b610516565b3480156101d857600080fd5b506101956101e7366004611d88565b610648565b6101956101fa366004611f21565b6106cc565b34801561020b57600080fd5b5061019561021a366004611d23565b610838565b34801561022b57600080fd5b506101956108f8565b34801561024057600080fd5b5060055461014b9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561026d57600080fd5b5061019561027c366004611d23565b6109de565b34801561028d57600080fd5b5060005461014b9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102ba57600080fd5b506101956102c93660046120b3565b610a9e565b3480156102da57600080fd5b506102e460045481565b60405190815260200161016c565b3480156102fe57600080fd5b5060035461014b9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561032b57600080fd5b5060015461014b9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561035857600080fd5b50610195610367366004611d23565b610bad565b34801561037857600080fd5b50610195610387366004612157565b610d0b565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103dd576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f3e3c5e6d5b512eaa5d5a80669846cfbaf8bde70fc6f7a3be9828cffc9ba5f1db90600090a250565b60005473ffffffffffffffffffffffffffffffffffffffff16331461049d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166104ec576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610567576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166106225760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146105dc576040519150601f19603f3d011682016040523d82523d6000602084013e6105e1565b606091505b505090508061061c576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b61064373ffffffffffffffffffffffffffffffffffffffff84168383610e13565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610699576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600481905560405181907ffd178559652d65eca585044f34f8688859896a9bebaa7530dbe97c5c527320d590600090a250565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610747576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815573ffffffffffffffffffffffffffffffffffffffff831661077a5761077585858585346000610ee7565b61082e565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff85169063dd62ed3e90604401602060405180830381865afa1580156107ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081191906121da565b905061081d8482611368565b61082c86868686856000610ee7565b505b6000905550505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610889576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f806d08432293677cc7e3e0f9443dcf0459f82567573d5094da6e9e6129dea4ab90600090a250565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461094a576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a2f576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600580547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517fcc6aaf791b8b7c6167981db821320441082903e27343e380dca76afd5807577d90600090a250565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610b19576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560025473ffffffffffffffffffffffffffffffffffffffff163314610b6e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080600084806020019051810190610b8791906123b9565b93505092509250610b9d838389848a6001610ee7565b5050600090915550505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610bfe576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610c4b576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610c9a576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610d86576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560055473ffffffffffffffffffffffffffffffffffffffff163314610ddb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008083806020019051810190610df29190612426565b91509150610e05898389848c6000610ee7565b505060009055505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106439084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526114e3565b600081610ef5576000610ef9565b6004545b905073ffffffffffffffffffffffffffffffffffffffff85166111ad5760005a9050828015610f2757508181105b1561102e5760008573ffffffffffffffffffffffffffffffffffffffff168560405160006040518083038185875af1925050503d8060008114610f86576040519150601f19603f3d011682016040523d82523d6000602084013e610f8b565b606091505b5050905080610fc6576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2505050611360565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b8561105785856124a7565b908b8b8b8b6040518763ffffffff1660e01b815260040161107b949392919061250a565b6000604051808303818589803b15801561109457600080fd5b5088f194505050505080156110a7575060015b6111a75760008573ffffffffffffffffffffffffffffffffffffffff168560405160006040518083038185875af1925050503d8060008114611105576040519150601f19603f3d011682016040523d82523d6000602084013e61110a565b606091505b5050905080611145576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2505b5061135e565b60005a60035490915086906111dd9073ffffffffffffffffffffffffffffffffffffffff808416911660006115ef565b8380156111e957508282105b1561120f57610fc673ffffffffffffffffffffffffffffffffffffffff82168787610e13565b6003546112369073ffffffffffffffffffffffffffffffffffffffff838116911687611771565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b61125e85856124a7565b8b8b8b8b6040518663ffffffff1660e01b8152600401611281949392919061250a565b600060405180830381600088803b15801561129b57600080fd5b5087f1935050505080156112ad575060015b611333576112d273ffffffffffffffffffffffffffffffffffffffff82168787610e13565b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b60035461135b9073ffffffffffffffffffffffffffffffffffffffff838116911660006115ef565b50505b505b505050505050565b806000036113a2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166113fb57803410156113f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611468573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061148c91906121da565b9050818110156114d7576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6106438333308561186f565b6000611545826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611a819092919063ffffffff16565b80519091501561064357808060200190518101906115639190612645565b610643576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016114ce565b80158061168f57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611669573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061168d91906121da565b155b61171b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016114ce565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106439084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610e65565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa1580156117e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061180c91906121da565b6118169190612662565b60405173ffffffffffffffffffffffffffffffffffffffff851660248201526044810182905290915061061c9085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610e65565b73ffffffffffffffffffffffffffffffffffffffff84166118bc576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611909576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561197a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061199e91906121da565b90506119ac82868686611a98565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611a1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a4091906121da565b611a4a91906124a7565b14611360576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060611a908484600085611af6565b949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261061c9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610e65565b606082471015611b88576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016114ce565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611bb19190612675565b60006040518083038185875af1925050503d8060008114611bee576040519150601f19603f3d011682016040523d82523d6000602084013e611bf3565b606091505b5091509150611c0487838387611c0f565b979650505050505050565b60608315611ca5578251600003611c9e5773ffffffffffffffffffffffffffffffffffffffff85163b611c9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016114ce565b5081611a90565b611a908383815115611cba5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114ce9190612691565b73ffffffffffffffffffffffffffffffffffffffff81168114611d1057600080fd5b50565b8035611d1e81611cee565b919050565b600060208284031215611d3557600080fd5b8135611d4081611cee565b9392505050565b600080600060608486031215611d5c57600080fd5b8335611d6781611cee565b92506020840135611d7781611cee565b929592945050506040919091013590565b600060208284031215611d9a57600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611df357611df3611da1565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611e4057611e40611da1565b604052919050565b600067ffffffffffffffff821115611e6257611e62611da1565b5060051b60200190565b600067ffffffffffffffff821115611e8657611e86611da1565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611ec357600080fd5b8135611ed6611ed182611e6c565b611df9565b818152846020838601011115611eeb57600080fd5b816020850160208301376000918101602001919091529392505050565b8015158114611d1057600080fd5b8035611d1e81611f08565b60008060008060808587031215611f3757600080fd5b84359350602085013567ffffffffffffffff80821115611f5657600080fd5b818701915087601f830112611f6a57600080fd5b8135611f78611ed182611e48565b8082825260208201915060208360051b86010192508a831115611f9a57600080fd5b602085015b83811015612085578481351115611fb557600080fd5b8035860160e07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828f03011215611feb57600080fd5b611ff3611dd0565b611fff60208301611d13565b815261200d60408301611d13565b602082015261201e60608301611d13565b604082015261202f60808301611d13565b606082015260a0820135608082015260c08201358781111561205057600080fd5b61205f8f602083860101611eb2565b60a08301525061207160e08301611f16565b60c082015284525060209283019201611f9f565b50809750505050505061209a60408601611d13565b91506120a860608601611d13565b905092959194509250565b60008060008060008060c087890312156120cc57600080fd5b863561ffff811681146120de57600080fd5b9550602087013567ffffffffffffffff808211156120fb57600080fd5b6121078a838b01611eb2565b9650604089013595506060890135915061212082611cee565b9093506080880135925060a0880135908082111561213d57600080fd5b5061214a89828a01611eb2565b9150509295509295509295565b60008060008060008060c0878903121561217057600080fd5b8635955060208701359450604087013561218981611cee565b9350606087013561219981611cee565b9250608087013563ffffffff811681146121b257600080fd5b915060a087013567ffffffffffffffff8111156121ce57600080fd5b61214a89828a01611eb2565b6000602082840312156121ec57600080fd5b5051919050565b8051611d1e81611cee565b60005b83811015612219578181015183820152602001612201565b50506000910152565b600082601f83011261223357600080fd5b8151612241611ed182611e6c565b81815284602083860101111561225657600080fd5b611a908260208301602087016121fe565b8051611d1e81611f08565b600082601f83011261228357600080fd5b81516020612293611ed183611e48565b82815260059290921b840181019181810190868411156122b257600080fd5b8286015b848110156123ae57805167ffffffffffffffff808211156122d75760008081fd5b818901915060e0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848d030112156123105760008081fd5b612318611dd0565b6123238885016121f3565b815260406123328186016121f3565b8983015260606123438187016121f3565b82840152608091506123568287016121f3565b818401525060a0808601518284015260c09150818601518581111561237b5760008081fd5b6123898f8c838a0101612222565b82850152505061239a838601612267565b9082015286525050509183019183016122b6565b509695505050505050565b600080600080608085870312156123cf57600080fd5b84519350602085015167ffffffffffffffff8111156123ed57600080fd5b6123f987828801612272565b935050604085015161240a81611cee565b606086015190925061241b81611cee565b939692955090935050565b6000806040838503121561243957600080fd5b825167ffffffffffffffff81111561245057600080fd5b61245c85828601612272565b925050602083015161246d81611cee565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156124ba576124ba612478565b92915050565b600081518084526124d88160208601602086016121fe565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b838110156125f5577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e0898601819052906125c9828701826124c0565b91505060c08083015192506125e18187018415159052565b509587019593505090850190600101612538565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550612620945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b60006020828403121561265757600080fd5b8151611d4081611f08565b808201808211156124ba576124ba612478565b600082516126878184602087016121fe565b9190910192915050565b602081526000611d4060208301846124c056fea26469706673582212207b0ac408f6d80f37a05c20fb217bdcb54e6a719b09ade297cd3457b29265ab7864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_sgRouter";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_amarokRouter";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_executor";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_recoverGas";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExternalCallFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NewOwnerMustNotBeSelf";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoNullOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoPendingOwnershipTransfer";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotPendingOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnAuthorized";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "router";
            readonly type: "address";
        }];
        readonly name: "AmarokRouterSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "executor";
            readonly type: "address";
        }];
        readonly name: "ExecutorSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiGenericSwapCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiSwappedGeneric";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferRecovered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "LiFiTransferStarted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferRequested";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "recoverGas";
            readonly type: "uint256";
        }];
        readonly name: "RecoverGasSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "router";
            readonly type: "address";
        }];
        readonly name: "StargateRouterSet";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "amarokRouter";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "cancelOwnershipTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "confirmOwnershipTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "executor";
        readonly outputs: readonly [{
            readonly internalType: "contract IExecutor";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pendingOwner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "assetId";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "pullToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "recoverGas";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_amarokRouter";
            readonly type: "address";
        }];
        readonly name: "setAmarokRouter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_executor";
            readonly type: "address";
        }];
        readonly name: "setExecutor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_recoverGas";
            readonly type: "uint256";
        }];
        readonly name: "setRecoverGas";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_sgRouter";
            readonly type: "address";
        }];
        readonly name: "setStargateRouter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_payload";
            readonly type: "bytes";
        }];
        readonly name: "sgReceive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "sgRouter";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_transactionId";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fromAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "requiresDeposit";
                readonly type: "bool";
            }];
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly name: "_swapData";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "assetId";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "swapAndCompleteBridgeTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_transferId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_asset";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_callData";
            readonly type: "bytes";
        }];
        readonly name: "xReceive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Receiver;
}
export {};
