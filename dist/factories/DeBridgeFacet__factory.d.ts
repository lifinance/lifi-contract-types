import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DeBridgeFacet, DeBridgeFacetInterface } from "../DeBridgeFacet";
declare type DeBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DeBridgeFacet__factory extends ContractFactory {
    constructor(...args: DeBridgeFacetConstructorParams);
    deploy(_deBridgeGate: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<DeBridgeFacet>;
    getDeployTransaction(_deBridgeGate: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): DeBridgeFacet;
    connect(signer: Signer): DeBridgeFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002b4f38038062002b4f833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612aa6620000a96000396000818161068c0152818161071a01528181610831015261085c0152612aa66000f3fe6080604052600436106100295760003560e01c80635fcb02601461002e578063be3d5ec514610043575b600080fd5b61004161003c3660046120bc565b610056565b005b610041610051366004612357565b61026d565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612445565b90506100ed85612458565b60a081015173ffffffffffffffffffffffffffffffffffffffff1661013e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361017c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101c286612458565b806101000151156101ff576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61021161020b88612458565b87610466565b61022e61022460a0890160808a01612464565b8860c001356104cb565b61024061023a88612458565b87610647565b50479050818111156102615761026160008461025c8585612445565b6109f2565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102e8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102f93447612445565b905086806101000151610338576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761035b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610392576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103d0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361040d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104178987610466565b885160c08a015161042d91908a8a338b35610a23565b60c08a015261043c8987610647565b50479050818111156104585761045860008461025c8585612445565b505060009091555050505050565b6101208201511515600061047d6060840184612486565b61048b9060608101906124c4565b9050111515146104c7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610505576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661055a57803410156104c7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105eb9190612530565b905081811015610636576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61064283333085610bbe565b505050565b60e08201516040517f7796656c00000000000000000000000000000000000000000000000000000000815260009173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001691637796656c916106c39160040190815260200190565b606060405180830381865afa1580156106e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107049190612549565b8051909150600090156107185781516107a7565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335087f0a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610783573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a79190612530565b9050823581146107e3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610807856080015173ffffffffffffffffffffffffffffffffffffffff161590565b9050833581156108275760c086015161082090826125b9565b905061085a565b61085a86608001517f00000000000000000000000000000000000000000000000000000000000000008860c00151610dd8565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663be2974768288608001518960c001518a60e001518b60a001516040516020016108e6919060609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152610923908d0160208e016125cc565b61093360608e0160408f016125e9565b61094060608f018f612486565b60405160200161095091906126bc565b6040516020818303038152906040526040518963ffffffff1660e01b815260040161098197969594939291906127b2565b6000604051808303818588803b15801561099a57600080fd5b505af11580156109ae573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1866040516109e29190612836565b60405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a1957610642838383610f1b565b610642828261109d565b600083808203610a5f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610a6e600185612445565b818110610a7d57610a7d612949565b9050602002810190610a8f9190612978565b610aa0906080810190606001612464565b90506000610aad826111c7565b905073ffffffffffffffffffffffffffffffffffffffff8216610ad757610ad43482612445565b90505b6000610ae38989611280565b9050610aef898961138c565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610b2a818b8b856113f9565b600083610b36866111c7565b610b409190612445565b905073ffffffffffffffffffffffffffffffffffffffff8516610b6a57610b678882612445565b90505b8b811015610bae576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440161062d565b9c9b505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610c0b576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c58576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610cc9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ced9190612530565b9050610cfb828686866117ea565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610d6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8f9190612530565b610d999190612445565b14610dd0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610df857505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e45576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610eba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ede9190612530565b101561064257610ef0838360006118c6565b61064283837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118c6565b73ffffffffffffffffffffffffffffffffffffffff8316610f68576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610fb5576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611022573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110469190612530565b90508082111561108c576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161062d565b611097848484611a48565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166110ea576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561112d576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161062d565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611187576040519150601f19603f3d011682016040523d82523d6000602084013e61118c565b606091505b5050905080610642576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611278576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561124f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112739190612530565b61127a565b475b92915050565b60608160008167ffffffffffffffff81111561129e5761129e612129565b6040519080825280602002602001820160405280156112c7578160200160208202803683370190505b5090506000805b83811015611381578686828181106112e8576112e8612949565b90506020028101906112fa9190612978565b61130b906080810190606001612464565b9150611316826111c7565b83828151811061132857611328612949565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611379573483828151811061136157611361612949565b602002602001018181516113759190612445565b9052505b6001016112ce565b509095945050505050565b60005b8181101561064257368383838181106113aa576113aa612949565b90506020028101906113bc9190612978565b90506113ce60e0820160c083016125cc565b156113f0576113f06113e66060830160408401612464565b82608001356104cb565b5060010161138f565b6020840151604085015184918491849083600181146117035760008686611421600185612445565b81811061143057611430612949565b90506020028101906114429190612978565b611453906080810190606001612464565b9050600089815b8181101561160057368d8d8381811061147557611475612949565b90506020028101906114879190612978565b90506114b661149c6060830160408401612464565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061151957506115196114cf6040830160208401612464565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561153057506115306114cf6020830183612464565b80156115b557506115b561154760a08301836124c4565b611556916004916000916129ac565b61155f916129d6565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6115eb576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516115f79082611a9e565b5060010161145a565b505060005b611610600185612445565b8110156116fb57600089898381811061162b5761162b612949565b905060200281019061163d9190612978565b61164e906080810190606001612464565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146116f25786828151811061169557611695612949565b60200260200101516116a6826111c7565b6116b09190612445565b9250600073ffffffffffffffffffffffffffffffffffffffff8216156116d75760006116d9565b865b905083156116f0576116f0828a61025c8488612445565b505b50600101611605565b5050506117de565b8760005b818110156117db57368b8b8381811061172257611722612949565b90506020028101906117349190612978565b905061174961149c6060830160408401612464565b8061176257506117626114cf6040830160208401612464565b801561177957506117796114cf6020830183612464565b8015611790575061179061154760a08301836124c4565b6117c6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516117d29082611a9e565b50600101611707565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526110979085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d7c565b80158061196657506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611940573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119649190612530565b155b6119f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161062d565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106429084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611844565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106429084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611844565b611ab4611aae6020830183612464565b3b151590565b611aea576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611b2a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611b3f61149c6060850160408601612464565b611b4a576000611b50565b82608001355b90506000611b6c611b676060860160408701612464565b6111c7565b90506000611b83611b676080870160608801612464565b905082600003611bba57611bba611ba06060870160408801612464565b611bb06040880160208901612464565b8760800135610dd8565b8460800135821015611c05576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161062d565b600080611c156020880188612464565b73ffffffffffffffffffffffffffffffffffffffff1685611c3960a08a018a6124c4565b604051611c47929190612a1e565b60006040518083038185875af1925050503d8060008114611c84576040519150601f19603f3d011682016040523d82523d6000602084013e611c89565b606091505b509150915081611c9c57611c9c81611e8b565b6000611cb1611b6760808a0160608b01612464565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611ce260208b018b612464565b611cf260608c0160408d01612464565b611d0260808d0160608e01612464565b8c60800135898711611d145786611d1e565b611d1e8a88612445565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611dde826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e959092919063ffffffff16565b9050805160001480611dff575080806020019051810190611dff9190612a2e565b610642576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161062d565b8051602082018181fd5b6060611ea48484600085611eac565b949350505050565b606082471015611f3e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161062d565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f679190612a4b565b60006040518083038185875af1925050503d8060008114611fa4576040519150601f19603f3d011682016040523d82523d6000602084013e611fa9565b606091505b5091509150611fba87838387611fc5565b979650505050505050565b6060831561205b5782516000036120545773ffffffffffffffffffffffffffffffffffffffff85163b612054576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161062d565b5081611ea4565b611ea483838151156120705781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062d9190612a5d565b6000608082840312156120b657600080fd5b50919050565b600080604083850312156120cf57600080fd5b823567ffffffffffffffff808211156120e757600080fd5b9084019061014082870312156120fc57600080fd5b9092506020840135908082111561211257600080fd5b5061211f858286016120a4565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561217c5761217c612129565b60405290565b600082601f83011261219357600080fd5b813567ffffffffffffffff808211156121ae576121ae612129565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156121f4576121f4612129565b8160405283815286602085880101111561220d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461225157600080fd5b919050565b801515811461226457600080fd5b50565b803561225181612256565b6000610140828403121561228557600080fd5b61228d612158565b905081358152602082013567ffffffffffffffff808211156122ae57600080fd5b6122ba85838601612182565b602084015260408401359150808211156122d357600080fd5b506122e084828501612182565b6040830152506122f26060830161222d565b60608201526123036080830161222d565b608082015261231460a0830161222d565b60a082015260c082013560c082015260e082013560e082015261010061233b818401612267565b9082015261012061234d838201612267565b9082015292915050565b6000806000806060858703121561236d57600080fd5b843567ffffffffffffffff8082111561238557600080fd5b61239188838901612272565b955060208701359150808211156123a757600080fd5b818701915087601f8301126123bb57600080fd5b8135818111156123ca57600080fd5b8860208260051b85010111156123df57600080fd5b6020830195508094505060408701359150808211156123fd57600080fd5b5061240a878288016120a4565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561127a5761127a612416565b600061127a3683612272565b60006020828403121561247657600080fd5b61247f8261222d565b9392505050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff818336030181126124ba57600080fd5b9190910192915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126124f957600080fd5b83018035915067ffffffffffffffff82111561251457600080fd5b60200191503681900382131561252957600080fd5b9250929050565b60006020828403121561254257600080fd5b5051919050565b60006060828403121561255b57600080fd5b6040516060810181811067ffffffffffffffff8211171561257e5761257e612129565b60405282518152602083015161259381612256565b6020820152604083015161ffff811681146125ad57600080fd5b60408201529392505050565b8082018082111561127a5761127a612416565b6000602082840312156125de57600080fd5b813561247f81612256565b6000602082840312156125fb57600080fd5b813563ffffffff8116811461247f57600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261264457600080fd5b830160208101925035905067ffffffffffffffff81111561266457600080fd5b80360382131561252957600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60208152813560208201526020820135604082015260006126e0604084018461260f565b608060608501526126f560a085018284612673565b915050612705606085018561260f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301608086015261273a838284612673565b9695505050505050565b60005b8381101561275f578181015183820152602001612747565b50506000910152565b60008151808452612780816020860160208601612744565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600061010073ffffffffffffffffffffffffffffffffffffffff8a1683528860208401528760408401528060608401526127ee81840188612768565b90508281038060808501526000825286151560a085015263ffffffff861660c08501526020810160e0850152506128286020820185612768565b9a9950505050505050505050565b60208152815160208201526000602083015161014080604085015261285f610160850183612768565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261289a8382612768565b92505060608501516128c4608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206129378187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126124ba57600080fd5b600080858511156129bc57600080fd5b838611156129c957600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612a165780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215612a4057600080fd5b815161247f81612256565b600082516124ba818460208701612744565b60208152600061247f602083018461276856fea2646970667358221220f2f84313def6cf03f04fc6250647b2483962c154ecc98f6c4e387e2fde3ce5a764736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_deBridgeGate";
            readonly type: "address";
            readonly internalType: "contract IDeBridgeGate";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaDeBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
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
        }, {
            readonly name: "_deBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct DeBridgeFacet.DeBridgeData";
            readonly components: readonly [{
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "useAssetFee";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "referralCode";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "autoParams";
                readonly type: "tuple";
                readonly internalType: "struct DeBridgeFacet.SubmissionAutoParamsTo";
                readonly components: readonly [{
                    readonly name: "executionFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "flags";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "fallbackAddress";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "data";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaDeBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
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
            readonly name: "_deBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct DeBridgeFacet.DeBridgeData";
            readonly components: readonly [{
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "useAssetFee";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "referralCode";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "autoParams";
                readonly type: "tuple";
                readonly internalType: "struct DeBridgeFacet.SubmissionAutoParamsTo";
                readonly components: readonly [{
                    readonly name: "executionFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "flags";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "fallbackAddress";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "data";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
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
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
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
    }];
    static createInterface(): DeBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DeBridgeFacet;
}
export {};
