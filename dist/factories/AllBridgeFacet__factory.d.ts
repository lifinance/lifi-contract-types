import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AllBridgeFacet, AllBridgeFacetInterface } from "../AllBridgeFacet";
declare type AllBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AllBridgeFacet__factory extends ContractFactory {
    constructor(...args: AllBridgeFacetConstructorParams);
    deploy(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AllBridgeFacet>;
    getDeployTransaction(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AllBridgeFacet;
    connect(signer: Signer): AllBridgeFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620029d7380380620029d7833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612936620000a1600039600081816060015281816106d4015261075801526129366000f3fe6080604052600436106100345760003560e01c80635d939e1614610039578063dcd4433c1461004e578063ebbaa1cb146100ab575b600080fd5b61004c610047366004612269565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b9366004612316565b610303565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447612394565b905086806101000151610189576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101ea8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610221576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361025f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361029c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b18a600001518b60c001518b8b3361053f565b60c08b01526102c08a88610687565b50479150600090508282116102d65760006102e0565b6102e08383612394565b905080156102f4576102f46000858361087c565b50506000909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161037e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061038f3447612394565b9050846103b48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103eb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610429576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610466576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156104a4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156104e2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104f488608001518960c001516108b2565b6104fe8888610687565b504791506000905082821161051457600061051e565b61051e8383612394565b90508015610532576105326000858361087c565b5050600090925550505050565b60008280820361057b576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561058a600185612394565b818110610599576105996123a7565b90506020028101906105ab91906123d6565b6105bc906080810190606001612414565b905060006105c982610a28565b905073ffffffffffffffffffffffffffffffffffffffff82166105f3576105f03482612394565b90505b60006105ff8888610ae1565b905061060b8888610bed565b6106188a89898985610c4e565b60008261062485610a28565b61062e9190612394565b905089811015610679576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60808201516040517fb5217bb400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201526000917f0000000000000000000000000000000000000000000000000000000000000000169063b5217bb4906024016020604051808303816000875af115801561071d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107419190612431565b90506107568360800151828560c00151611000565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f35e37d38360000135856080015173ffffffffffffffffffffffffffffffffffffffff1660001b8660c0015186602001358760400160208101906107d2919061244e565b606089013560808a01356107ec60c08c0160a08d01612471565b6040518963ffffffff1660e01b815260040161080e9796959493929190612492565b6000604051808303818588803b15801561082757600080fd5b505af115801561083b573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18360405161086f9190612575565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316156108a8576108a383838361114b565b505050565b6108a3828261127a565b73ffffffffffffffffffffffffffffffffffffffff821661090b5780341015610907576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610945576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156109b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d69190612688565b905081811015610a1c576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610670565b6108a3833330856113a4565b600073ffffffffffffffffffffffffffffffffffffffff821615610ad9576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610ab0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad49190612688565b610adb565b475b92915050565b60608160008167ffffffffffffffff811115610aff57610aff611fb7565b604051908082528060200260200182016040528015610b28578160200160208202803683370190505b5090506000805b83811015610be257868682818110610b4957610b496123a7565b9050602002810190610b5b91906123d6565b610b6c906080810190606001612414565b9150610b7782610a28565b838281518110610b8957610b896123a7565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610bda5734838281518110610bc257610bc26123a7565b60200260200101818151610bd69190612394565b9052505b600101610b2f565b509095945050505050565b60005b818110156108a3576000838383818110610c0c57610c0c6123a7565b9050602002810190610c1e91906123d6565b610c27906126a1565b90508060c0015115610c4557610c45816040015182608001516108b2565b50600101610bf0565b838383838260018114610f1b5760008585610c6a600185612394565b818110610c7957610c796123a7565b9050602002810190610c8b91906123d6565b610c9c906080810190606001612414565b9050600089815b81811015610e4757368d8d83818110610cbe57610cbe6123a7565b9050602002810190610cd091906123d6565b9050610cff610ce56060830160408401612414565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d625750610d62610d186040830160208401612414565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d795750610d79610d186020830183612414565b8015610dfe5750610dfe610d9060a0830183612746565b610d9f916004916000916127b2565b610da8916127dc565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e34576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e3e8f826115be565b50600101610ca3565b505060005b610e57600185612394565b811015610f13576000888883818110610e7257610e726123a7565b9050602002810190610e8491906123d6565b610e95906080810190606001612414565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f0a57858281518110610edc57610edc6123a7565b6020026020010151610eed82610a28565b610ef79190612394565b92508215610f0a57610f0a81888561087c565b50600101610e4c565b505050610ff4565b8760005b81811015610ff157368b8b83818110610f3a57610f3a6123a7565b9050602002810190610f4c91906123d6565b9050610f61610ce56060830160408401612414565b80610f7a5750610f7a610d186040830160208401612414565b8015610f915750610f91610d186020830183612414565b8015610fa85750610fa8610d9060a0830183612746565b610fde576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fe88d826115be565b50600101610f1f565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661102057505050565b73ffffffffffffffffffffffffffffffffffffffff821661106d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156110e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111079190612688565b905081811015611145576111458484611140847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612394565b6118d4565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316611198576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611205573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112299190612688565b90508082111561126f576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610670565b611145848484611a50565b73ffffffffffffffffffffffffffffffffffffffff82166112c7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561130a576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610670565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611364576040519150601f19603f3d011682016040523d82523d6000602084013e611369565b606091505b50509050806108a3576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166113f1576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661143e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156114af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d39190612688565b90506114e182868686611aa6565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611551573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115759190612688565b61157f9190612394565b146115b6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6115d46115ce6020830183612414565b3b151590565b61160a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361164a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061165f610ce56060850160408601612414565b61166a576000611670565b82608001355b9050600061168c6116876060860160408701612414565b610a28565b905060006116a36116876080870160608801612414565b9050826000036116da576116da6116c06060870160408801612414565b6116d06040880160208901612414565b8760800135611000565b8460800135821015611725576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610670565b6000806117356020880188612414565b73ffffffffffffffffffffffffffffffffffffffff168561175960a08a018a612746565b604051611767929190612824565b60006040518083038185875af1925050503d80600081146117a4576040519150601f19603f3d011682016040523d82523d6000602084013e6117a9565b606091505b5091509150816117f45760006117be82611b04565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106709190612834565b600061180961168760808a0160608b01612414565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961183a60208b018b612414565b61184a60608c0160408d01612414565b61185a60808d0160608e01612414565b8c6080013589871161186c5786611876565b6118768a88612394565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa15801561194b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061196f9190612688565b6119799190612847565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506111459085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b82565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108a39084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016119ce565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526111459085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016119ce565b6060604482511015611b4957505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611b656004808551611b5d9190612394565b859190611c8e565b905080806020019051810190611b7b919061285a565b9392505050565b6000611be4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611da89092919063ffffffff16565b8051909150156108a35780806020019051810190611c0291906128d1565b6108a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610670565b606081611c9c81601f612847565b1015611cd4576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611cde8284612847565b84511015611d18576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611d375760405191506000825260208201604052611d9f565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d70578051835260209283019201611d58565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611db78484600085611dbf565b949350505050565b606082471015611e51576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610670565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e7a91906128ee565b60006040518083038185875af1925050503d8060008114611eb7576040519150601f19603f3d011682016040523d82523d6000602084013e611ebc565b606091505b5091509150611ecd87838387611ed8565b979650505050505050565b60608315611f6e578251600003611f675773ffffffffffffffffffffffffffffffffffffffff85163b611f67576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610670565b5081611db7565b611db78383815115611f835781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106709190612834565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561200a5761200a611fb7565b60405290565b60405160e0810167ffffffffffffffff8111828210171561200a5761200a611fb7565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561207a5761207a611fb7565b604052919050565b600067ffffffffffffffff82111561209c5761209c611fb7565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126120d957600080fd5b81356120ec6120e782612082565b612033565b81815284602083860101111561210157600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461214057600080fd5b50565b803561214e8161211e565b919050565b801515811461214057600080fd5b803561214e81612153565b6000610140828403121561217f57600080fd5b612187611fe6565b905081358152602082013567ffffffffffffffff808211156121a857600080fd5b6121b4858386016120c8565b602084015260408401359150808211156121cd57600080fd5b506121da848285016120c8565b6040830152506121ec60608301612143565b60608201526121fd60808301612143565b608082015261220e60a08301612143565b60a082015260c082013560c082015260e082013560e0820152610100612235818401612161565b90820152610120612247838201612161565b9082015292915050565b600060c0828403121561226357600080fd5b50919050565b600080600080610100858703121561228057600080fd5b843567ffffffffffffffff8082111561229857600080fd5b6122a48883890161216c565b955060208701359150808211156122ba57600080fd5b818701915087601f8301126122ce57600080fd5b8135818111156122dd57600080fd5b8860208260051b85010111156122f257600080fd5b60208301955080945050505061230b8660408701612251565b905092959194509250565b60008060e0838503121561232957600080fd5b823567ffffffffffffffff81111561234057600080fd5b61234c8582860161216c565b92505061235c8460208501612251565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610adb57610adb612365565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261240a57600080fd5b9190910192915050565b60006020828403121561242657600080fd5b8135611b7b8161211e565b60006020828403121561244357600080fd5b8151611b7b8161211e565b60006020828403121561246057600080fd5b813560ff81168114611b7b57600080fd5b60006020828403121561248357600080fd5b813560048110611b7b57600080fd5b600060e08201905088825287602083015286604083015260ff861660608301528460808301528360a0830152600483106124f5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8260c083015298975050505050505050565b60005b8381101561252257818101518382015260200161250a565b50506000910152565b60008151808452612543816020860160208601612507565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261259e61016085018361252b565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526125d9838261252b565b9250506060850151612603608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126768187018315159052565b90950151151593019290925250919050565b60006020828403121561269a57600080fd5b5051919050565b600060e082360312156126b357600080fd5b6126bb612010565b6126c483612143565b81526126d260208401612143565b60208201526126e360408401612143565b60408201526126f460608401612143565b60608201526080830135608082015260a083013567ffffffffffffffff81111561271d57600080fd5b612729368286016120c8565b60a08301525061273b60c08401612161565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261277b57600080fd5b83018035915067ffffffffffffffff82111561279657600080fd5b6020019150368190038213156127ab57600080fd5b9250929050565b600080858511156127c257600080fd5b838611156127cf57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561281c5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611b7b602083018461252b565b80820180821115610adb57610adb612365565b60006020828403121561286c57600080fd5b815167ffffffffffffffff81111561288357600080fd5b8201601f8101841361289457600080fd5b80516128a26120e782612082565b8181528560208385010111156128b757600080fd5b6128c8826020830160208601612507565b95945050505050565b6000602082840312156128e357600080fd5b8151611b7b81612153565b6000825161240a81846020870161250756fea26469706673582212200ab057f5c75dcc3c934acdffb6266635dc9ce357102eb1af384e11a73d425ea764736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IAllBridge";
            readonly name: "_allBridge";
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
        readonly inputs: readonly [];
        readonly name: "allBridge";
        readonly outputs: readonly [{
            readonly internalType: "contract IAllBridge";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
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
                readonly internalType: "uint256";
                readonly name: "fees";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes32";
                readonly name: "recipient";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint8";
                readonly name: "destinationChainId";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes32";
                readonly name: "receiveToken";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "enum IAllBridge.MessengerProtocol";
                readonly name: "messenger";
                readonly type: "uint8";
            }];
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly name: "_allBridgeData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaAllBridge";
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
                readonly internalType: "uint256";
                readonly name: "fees";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes32";
                readonly name: "recipient";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint8";
                readonly name: "destinationChainId";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes32";
                readonly name: "receiveToken";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "enum IAllBridge.MessengerProtocol";
                readonly name: "messenger";
                readonly type: "uint8";
            }];
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly name: "_allBridgeData";
            readonly type: "tuple";
        }];
        readonly name: "swapAndStartBridgeTokensViaAllBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): AllBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AllBridgeFacet;
}
export {};
