import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CircleBridgeFacet, CircleBridgeFacetInterface } from "../CircleBridgeFacet";
declare type CircleBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CircleBridgeFacet__factory extends ContractFactory {
    constructor(...args: CircleBridgeFacetConstructorParams);
    deploy(_tokenMessenger: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CircleBridgeFacet>;
    getDeployTransaction(_tokenMessenger: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CircleBridgeFacet;
    connect(signer: Signer): CircleBridgeFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002b0138038062002b01833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051612a14620000ed600039600081816102aa01528181610337015281816105f30152818161086c015261096b01526000818161088d01526108d20152612a146000f3fe6080604052600436106100295760003560e01c806302d452ab1461002e578063e9017dc514610043575b600080fd5b61004161003c36600461212d565b610056565b005b610041610051366004612413565b6103b8565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476124ee565b90506100ed85612501565b8061010001511561012a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61013386612501565b80610120015115610170576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61017987612501565b60a081015173ffffffffffffffffffffffffffffffffffffffff166101ca576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610208576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610245576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024e88612501565b608081015173ffffffffffffffffffffffffffffffffffffffff1661029f576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102a889612501565b7f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610332576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103607f00000000000000000000000000000000000000000000000000000000000000008c60c001356106e7565b61037261036c8c612501565b8b610867565b5050505050506000479050600082821161038d576000610397565b61039783836124ee565b905080156103ab576103ab60008583610a12565b5050600090925550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610433576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061044434476124ee565b905086806101000151610483576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156104c1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104e48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561051b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610559576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610596576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b896105b9816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156105f0576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a7f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff161461067b576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106908d600001518e60c001518e8e33610a43565b60c08e015261069f8d8b610867565b505050505050600047905060008282116106ba5760006106c4565b6106c483836124ee565b905080156106d8576106d860008583610a12565b50506000909255505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610740578034101561073c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b8060000361077a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156107e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080b919061250d565b905081811015610856576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61086283333085610b86565b505050565b6108b67f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008460c00151610da0565b60c082015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636fd3504e906109066020850185612526565b60a086015160405160e085901b7fffffffff00000000000000000000000000000000000000000000000000000000168152600481019390935263ffffffff909116602483015273ffffffffffffffffffffffffffffffffffffffff90811660448301527f00000000000000000000000000000000000000000000000000000000000000001660648201526084016020604051808303816000875af11580156109b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d6919061254c565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610a0691906125e4565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610a3957610862838383610eeb565b610862828261101a565b600082808203610a7f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610a8e6001856124ee565b818110610a9d57610a9d6126f7565b9050602002810190610aaf9190612726565b610ac0906080810190606001612764565b90506000610acd82611144565b905073ffffffffffffffffffffffffffffffffffffffff8216610af757610af434826124ee565b90505b6000610b0388886111fd565b9050610b0f8888611309565b610b1c8a8989898561136a565b600082610b2885611144565b610b3291906124ee565b905089811015610b78576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161084d565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610bd3576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c20576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610c91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb5919061250d565b9050610cc38286868661171c565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610d33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d57919061250d565b610d6191906124ee565b14610d98576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610dc057505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e0d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610e83573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea7919061250d565b905081811015610ee557610ee58484610ee0847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6124ee565b6117f8565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f38576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610fa5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc9919061250d565b90508082111561100f576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161084d565b610ee58484846118f6565b73ffffffffffffffffffffffffffffffffffffffff8216611067576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156110aa576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161084d565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611104576040519150601f19603f3d011682016040523d82523d6000602084013e611109565b606091505b5050905080610862576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156111f5576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156111cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f0919061250d565b6111f7565b475b92915050565b60608160008167ffffffffffffffff81111561121b5761121b612182565b604051908082528060200260200182016040528015611244578160200160208202803683370190505b5090506000805b838110156112fe57868682818110611265576112656126f7565b90506020028101906112779190612726565b611288906080810190606001612764565b915061129382611144565b8382815181106112a5576112a56126f7565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112f657348382815181106112de576112de6126f7565b602002602001018181516112f291906124ee565b9052505b60010161124b565b509095945050505050565b60005b81811015610862576000838383818110611328576113286126f7565b905060200281019061133a9190612726565b6113439061277f565b90508060c001511561136157611361816040015182608001516106e7565b5060010161130c565b83838383826001811461163757600085856113866001856124ee565b818110611395576113956126f7565b90506020028101906113a79190612726565b6113b8906080810190606001612764565b9050600089815b8181101561156357368d8d838181106113da576113da6126f7565b90506020028101906113ec9190612726565b905061141b6114016060830160408401612764565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061147e575061147e6114346040830160208401612764565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561149557506114956114346020830183612764565b801561151a575061151a6114ac60a0830183612824565b6114bb91600491600091612890565b6114c4916128ba565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611550576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61155a8f8261194c565b506001016113bf565b505060005b6115736001856124ee565b81101561162f57600088888381811061158e5761158e6126f7565b90506020028101906115a09190612726565b6115b1906080810190606001612764565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611626578582815181106115f8576115f86126f7565b602002602001015161160982611144565b61161391906124ee565b9250821561162657611626818885610a12565b50600101611568565b505050611710565b8760005b8181101561170d57368b8b83818110611656576116566126f7565b90506020028101906116689190612726565b905061167d6114016060830160408401612764565b8061169657506116966114346040830160208401612764565b80156116ad57506116ad6114346020830183612764565b80156116c457506116c46114ac60a0830183612824565b6116fa576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117048d8261194c565b5060010161163b565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ee59085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c62565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa15801561186f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611893919061250d565b61189d9190612902565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610ee59085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611776565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108629084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611776565b61196261195c6020830183612764565b3b151590565b611998576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036119d8576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119ed6114016060850160408601612764565b6119f85760006119fe565b82608001355b90506000611a1a611a156060860160408701612764565b611144565b90506000611a31611a156080870160608801612764565b905082600003611a6857611a68611a4e6060870160408801612764565b611a5e6040880160208901612764565b8760800135610da0565b8460800135821015611ab3576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161084d565b600080611ac36020880188612764565b73ffffffffffffffffffffffffffffffffffffffff1685611ae760a08a018a612824565b604051611af5929190612915565b60006040518083038185875af1925050503d8060008114611b32576040519150601f19603f3d011682016040523d82523d6000602084013e611b37565b606091505b509150915081611b82576000611b4c82611d6e565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084d9190612925565b6000611b97611a1560808a0160608b01612764565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611bc860208b018b612764565b611bd860608c0160408d01612764565b611be860808d0160608e01612764565b8c60800135898711611bfa5786611c04565b611c048a886124ee565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611cc4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611dec9092919063ffffffff16565b8051909150156108625780806020019051810190611ce29190612938565b610862576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161084d565b6060604482511015611db357505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611dcf6004808551611dc791906124ee565b859190611e03565b905080806020019051810190611de59190612955565b9392505050565b6060611dfb8484600085611f1d565b949350505050565b606081611e1181601f612902565b1015611e49576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e538284612902565b84511015611e8d576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611eac5760405191506000825260208201604052611f14565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611ee5578051835260209283019201611ecd565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611faf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161084d565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611fd891906129cc565b60006040518083038185875af1925050503d8060008114612015576040519150601f19603f3d011682016040523d82523d6000602084013e61201a565b606091505b509150915061202b87838387612036565b979650505050505050565b606083156120cc5782516000036120c55773ffffffffffffffffffffffffffffffffffffffff85163b6120c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161084d565b5081611dfb565b611dfb83838151156120e15781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084d9190612925565b60006020828403121561212757600080fd5b50919050565b6000806040838503121561214057600080fd5b823567ffffffffffffffff81111561215757600080fd5b8301610140818603121561216a57600080fd5b91506121798460208501612115565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156121d5576121d5612182565b60405290565b60405160e0810167ffffffffffffffff811182821017156121d5576121d5612182565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561224557612245612182565b604052919050565b600067ffffffffffffffff82111561226757612267612182565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126122a457600080fd5b81356122b76122b28261224d565b6121fe565b8181528460208386010111156122cc57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461230d57600080fd5b919050565b801515811461232057600080fd5b50565b803561230d81612312565b6000610140828403121561234157600080fd5b6123496121b1565b905081358152602082013567ffffffffffffffff8082111561236a57600080fd5b61237685838601612293565b6020840152604084013591508082111561238f57600080fd5b5061239c84828501612293565b6040830152506123ae606083016122e9565b60608201526123bf608083016122e9565b60808201526123d060a083016122e9565b60a082015260c082013560c082015260e082013560e08201526101006123f7818401612323565b90820152610120612409838201612323565b9082015292915050565b6000806000806060858703121561242957600080fd5b843567ffffffffffffffff8082111561244157600080fd5b61244d8883890161232e565b9550602087013591508082111561246357600080fd5b818701915087601f83011261247757600080fd5b81358181111561248657600080fd5b8860208260051b850101111561249b57600080fd5b6020830195508094505050506124b48660408701612115565b905092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156111f7576111f76124bf565b60006111f7368361232e565b60006020828403121561251f57600080fd5b5051919050565b60006020828403121561253857600080fd5b813563ffffffff81168114611de557600080fd5b60006020828403121561255e57600080fd5b815167ffffffffffffffff81168114611de557600080fd5b60005b83811015612591578181015183820152602001612579565b50506000910152565b600081518084526125b2816020860160208601612576565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261260d61016085018361259a565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612648838261259a565b9250506060850151612672608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126e58187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261275a57600080fd5b9190910192915050565b60006020828403121561277657600080fd5b611de5826122e9565b600060e0823603121561279157600080fd5b6127996121db565b6127a2836122e9565b81526127b0602084016122e9565b60208201526127c1604084016122e9565b60408201526127d2606084016122e9565b60608201526080830135608082015260a083013567ffffffffffffffff8111156127fb57600080fd5b61280736828601612293565b60a08301525061281960c08401612323565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261285957600080fd5b83018035915067ffffffffffffffff82111561287457600080fd5b60200191503681900382131561288957600080fd5b9250929050565b600080858511156128a057600080fd5b838611156128ad57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128fa5780818660040360031b1b83161692505b505092915050565b808201808211156111f7576111f76124bf565b8183823760009101908152919050565b602081526000611de5602083018461259a565b60006020828403121561294a57600080fd5b8151611de581612312565b60006020828403121561296757600080fd5b815167ffffffffffffffff81111561297e57600080fd5b8201601f8101841361298f57600080fd5b805161299d6122b28261224d565b8181528560208385010111156129b257600080fd5b6129c3826020830160208601612576565b95945050505050565b6000825161275a81846020870161257656fea26469706673582212205ce4f5f17eb2409a353550c86751fa1d96f998043d494521fca8ebd61c70b92d64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ITokenMessenger";
            readonly name: "_tokenMessenger";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_usdc";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotBridgeToSameNetwork";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ContractCallNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "receivedAmount";
            readonly type: "uint256";
        }];
        readonly name: "CumulativeSlippageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InformationMismatch";
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
        readonly name: "InvalidContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidSendingToken";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetNotSupported";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapDataProvided";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapFromZeroBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAValidSpender";
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
        readonly name: "SliceOutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOverflow";
        readonly type: "error";
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstDomain";
                readonly type: "uint32";
            }];
            readonly internalType: "struct CircleBridgeFacet.CircleBridgeData";
            readonly name: "_circleBridgeData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaCircleBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
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
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "dstDomain";
                readonly type: "uint32";
            }];
            readonly internalType: "struct CircleBridgeFacet.CircleBridgeData";
            readonly name: "_circleBridgeData";
            readonly type: "tuple";
        }];
        readonly name: "swapAndStartBridgeTokensViaCircleBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): CircleBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CircleBridgeFacet;
}
export {};
