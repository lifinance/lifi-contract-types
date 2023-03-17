import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SynapseBridgeFacet, SynapseBridgeFacetInterface } from "../SynapseBridgeFacet";
declare type SynapseBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SynapseBridgeFacet__factory extends ContractFactory {
    constructor(...args: SynapseBridgeFacetConstructorParams);
    deploy(_synapseRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SynapseBridgeFacet>;
    getDeployTransaction(_synapseRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SynapseBridgeFacet;
    connect(signer: Signer): SynapseBridgeFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002a7238038062002a72833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516129d1620000a160003960008181604b015281816106f8015261074701526129d16000f3fe6080604052600436106100345760003560e01c8063698723ab146100395780637d9dd78b146100965780639700ad75146100ab575b600080fd5b34801561004557600080fd5b5061006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a96100a43660046121fd565b6100be565b005b6100a96100b93660046122bc565b610303565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447612358565b905086806101000151610189576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101ea8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610221576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361025f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361029c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b18a600001518b60c001518b8b33610562565b60c08b01526102c08a886106aa565b50479150600090508282116102d65760006102e0565b6102e08383612358565b905080156102f4576102f460008583610819565b50506000909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161037e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061038f3447612358565b905061039a8561236b565b60a081015173ffffffffffffffffffffffffffffffffffffffff166103eb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610429576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610466576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61046f8661236b565b806101000151156104ac576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104b58761236b565b806101200151156104f2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61050f61050560a08a0160808b01612377565b8960c0013561084f565b61052161051b8961236b565b886106aa565b5047915060009050828211610537576000610541565b6105418383612358565b905080156105555761055560008583610819565b5050600090925550505050565b60008280820361059e576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856105ad600185612358565b8181106105bc576105bc612392565b90506020028101906105ce91906123c1565b6105df906080810190606001612377565b905060006105ec826109c5565b905073ffffffffffffffffffffffffffffffffffffffff8216610616576106133482612358565b90505b60006106228888610a7e565b905061062e8888610b8a565b61063b8a89898985610beb565b600082610647856109c5565b6106519190612358565b90508981101561069c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015160009073ffffffffffffffffffffffffffffffffffffffff81166106ee57505060c082015173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee610721565b61072184608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151610f9d565b60a084015160e085015160c086015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169263c2288147928692869061077c8a806123ff565b61078960208c018c6123ff565b6040518863ffffffff1660e01b81526004016107aa96959493929190612547565b6000604051808303818588803b1580156107c357600080fd5b505af11580156107d7573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161080b9190612619565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff831615610845576108408383836110e8565b505050565b6108408282611217565b73ffffffffffffffffffffffffffffffffffffffff82166108a857803410156108a4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b806000036108e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561094f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610973919061272c565b9050818110156109b9576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610693565b61084083333085611341565b600073ffffffffffffffffffffffffffffffffffffffff821615610a76576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610a4d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a71919061272c565b610a78565b475b92915050565b60608160008167ffffffffffffffff811115610a9c57610a9c611f54565b604051908082528060200260200182016040528015610ac5578160200160208202803683370190505b5090506000805b83811015610b7f57868682818110610ae657610ae6612392565b9050602002810190610af891906123c1565b610b09906080810190606001612377565b9150610b14826109c5565b838281518110610b2657610b26612392565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b775734838281518110610b5f57610b5f612392565b60200260200101818151610b739190612358565b9052505b600101610acc565b509095945050505050565b60005b81811015610840576000838383818110610ba957610ba9612392565b9050602002810190610bbb91906123c1565b610bc490612745565b90508060c0015115610be257610be28160400151826080015161084f565b50600101610b8d565b838383838260018114610eb85760008585610c07600185612358565b818110610c1657610c16612392565b9050602002810190610c2891906123c1565b610c39906080810190606001612377565b9050600089815b81811015610de457368d8d83818110610c5b57610c5b612392565b9050602002810190610c6d91906123c1565b9050610c9c610c826060830160408401612377565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610cff5750610cff610cb56040830160208401612377565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d165750610d16610cb56020830183612377565b8015610d9b5750610d9b610d2d60a08301836127ea565b610d3c91600491600091612856565b610d4591612880565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610dd1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ddb8f8261155b565b50600101610c40565b505060005b610df4600185612358565b811015610eb0576000888883818110610e0f57610e0f612392565b9050602002810190610e2191906123c1565b610e32906080810190606001612377565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ea757858281518110610e7957610e79612392565b6020026020010151610e8a826109c5565b610e949190612358565b92508215610ea757610ea7818885610819565b50600101610de9565b505050610f91565b8760005b81811015610f8e57368b8b83818110610ed757610ed7612392565b9050602002810190610ee991906123c1565b9050610efe610c826060830160408401612377565b80610f175750610f17610cb56040830160208401612377565b8015610f2e5750610f2e610cb56020830183612377565b8015610f455750610f45610d2d60a08301836127ea565b610f7b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f858d8261155b565b50600101610ebc565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fbd57505050565b73ffffffffffffffffffffffffffffffffffffffff821661100a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611080573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a4919061272c565b9050818110156110e2576110e284846110dd847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612358565b611871565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316611135576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156111a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c6919061272c565b90508082111561120c576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610693565b6110e28484846119ed565b73ffffffffffffffffffffffffffffffffffffffff8216611264576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156112a7576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610693565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611301576040519150601f19603f3d011682016040523d82523d6000602084013e611306565b606091505b5050905080610840576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661138e576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166113db576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561144c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611470919061272c565b905061147e82868686611a43565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156114ee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611512919061272c565b61151c9190612358565b14611553576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61157161156b6020830183612377565b3b151590565b6115a7576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036115e7576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006115fc610c826060850160408601612377565b61160757600061160d565b82608001355b905060006116296116246060860160408701612377565b6109c5565b905060006116406116246080870160608801612377565b9050826000036116775761167761165d6060870160408801612377565b61166d6040880160208901612377565b8760800135610f9d565b84608001358210156116c2576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610693565b6000806116d26020880188612377565b73ffffffffffffffffffffffffffffffffffffffff16856116f660a08a018a6127ea565b6040516117049291906128c8565b60006040518083038185875af1925050503d8060008114611741576040519150601f19603f3d011682016040523d82523d6000602084013e611746565b606091505b50915091508161179157600061175b82611aa1565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069391906128d8565b60006117a661162460808a0160608b01612377565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896117d760208b018b612377565b6117e760608c0160408d01612377565b6117f760808d0160608e01612377565b8c608001358987116118095786611813565b6118138a88612358565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa1580156118e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061190c919061272c565b61191691906128eb565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506110e29085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b1f565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108409084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161196b565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526110e29085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161196b565b6060604482511015611ae657505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611b026004808551611afa9190612358565b859190611c2b565b905080806020019051810190611b1891906128fe565b9392505050565b6000611b81826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d459092919063ffffffff16565b8051909150156108405780806020019051810190611b9f919061296c565b610840576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610693565b606081611c3981601f6128eb565b1015611c71576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611c7b82846128eb565b84511015611cb5576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611cd45760405191506000825260208201604052611d3c565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d0d578051835260209283019201611cf5565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611d548484600085611d5c565b949350505050565b606082471015611dee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610693565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e179190612989565b60006040518083038185875af1925050503d8060008114611e54576040519150601f19603f3d011682016040523d82523d6000602084013e611e59565b606091505b5091509150611e6a87838387611e75565b979650505050505050565b60608315611f0b578251600003611f045773ffffffffffffffffffffffffffffffffffffffff85163b611f04576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610693565b5081611d54565b611d548383815115611f205781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069391906128d8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611fa757611fa7611f54565b60405290565b60405160e0810167ffffffffffffffff81118282101715611fa757611fa7611f54565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561201757612017611f54565b604052919050565b600067ffffffffffffffff82111561203957612039611f54565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261207657600080fd5b81356120896120848261201f565b611fd0565b81815284602083860101111561209e57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120df57600080fd5b919050565b80151581146120f257600080fd5b50565b80356120df816120e4565b6000610140828403121561211357600080fd5b61211b611f83565b905081358152602082013567ffffffffffffffff8082111561213c57600080fd5b61214885838601612065565b6020840152604084013591508082111561216157600080fd5b5061216e84828501612065565b604083015250612180606083016120bb565b6060820152612191608083016120bb565b60808201526121a260a083016120bb565b60a082015260c082013560c082015260e082013560e08201526101006121c98184016120f5565b908201526101206121db8382016120f5565b9082015292915050565b6000604082840312156121f757600080fd5b50919050565b6000806000806060858703121561221357600080fd5b843567ffffffffffffffff8082111561222b57600080fd5b61223788838901612100565b9550602087013591508082111561224d57600080fd5b818701915087601f83011261226157600080fd5b81358181111561227057600080fd5b8860208260051b850101111561228557600080fd5b6020830195508094505060408701359150808211156122a357600080fd5b506122b0878288016121e5565b91505092959194509250565b600080604083850312156122cf57600080fd5b823567ffffffffffffffff808211156122e757600080fd5b9084019061014082870312156122fc57600080fd5b9092506020840135908082111561231257600080fd5b5061231f858286016121e5565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610a7857610a78612329565b6000610a783683612100565b60006020828403121561238957600080fd5b611b18826120bb565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123f557600080fd5b9190910192915050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff618336030181126123f557600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600073ffffffffffffffffffffffffffffffffffffffff8061249d846120bb565b168452806124ad602085016120bb565b16602085015250604082013560408401526060820135606084015260808201357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18336030181126124fd57600080fd5b820160208101903567ffffffffffffffff81111561251a57600080fd5b80360382131561252957600080fd5b60a0608086015261253e60a086018284612433565b95945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808916835287602084015280871660408401525084606083015260c0608083015261258c60c083018561247c565b82810360a084015261259e818561247c565b9998505050505050505050565b60005b838110156125c65781810151838201526020016125ae565b50506000910152565b600081518084526125e78160208601602086016125ab565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526126426101608501836125cf565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261267d83826125cf565b92505060608501516126a7608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061271a8187018315159052565b90950151151593019290925250919050565b60006020828403121561273e57600080fd5b5051919050565b600060e0823603121561275757600080fd5b61275f611fad565b612768836120bb565b8152612776602084016120bb565b6020820152612787604084016120bb565b6040820152612798606084016120bb565b60608201526080830135608082015260a083013567ffffffffffffffff8111156127c157600080fd5b6127cd36828601612065565b60a0830152506127df60c084016120f5565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261281f57600080fd5b83018035915067ffffffffffffffff82111561283a57600080fd5b60200191503681900382131561284f57600080fd5b9250929050565b6000808585111561286657600080fd5b8386111561287357600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128c05780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611b1860208301846125cf565b80820180821115610a7857610a78612329565b60006020828403121561291057600080fd5b815167ffffffffffffffff81111561292757600080fd5b8201601f8101841361293857600080fd5b80516129466120848261201f565b81815285602083850101111561295b57600080fd5b61253e8260208301602086016125ab565b60006020828403121561297e57600080fd5b8151611b18816120e4565b600082516123f58184602087016125ab56fea2646970667358221220273eb09c8037cf35f869f748b5aec44cb69eb7fb7e3011952e86bd788e62696e64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISynapseRouter";
            readonly name: "_synapseRouter";
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
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "swapAdapter";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "tokenOut";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minAmountOut";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "rawParams";
                    readonly type: "bytes";
                }];
                readonly internalType: "struct ISynapseRouter.SwapQuery";
                readonly name: "originQuery";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "swapAdapter";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "tokenOut";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minAmountOut";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "rawParams";
                    readonly type: "bytes";
                }];
                readonly internalType: "struct ISynapseRouter.SwapQuery";
                readonly name: "destQuery";
                readonly type: "tuple";
            }];
            readonly internalType: "struct SynapseBridgeFacet.SynapseData";
            readonly name: "_synapseData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaSynapseBridge";
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
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "swapAdapter";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "tokenOut";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minAmountOut";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "rawParams";
                    readonly type: "bytes";
                }];
                readonly internalType: "struct ISynapseRouter.SwapQuery";
                readonly name: "originQuery";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "swapAdapter";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "tokenOut";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minAmountOut";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "rawParams";
                    readonly type: "bytes";
                }];
                readonly internalType: "struct ISynapseRouter.SwapQuery";
                readonly name: "destQuery";
                readonly type: "tuple";
            }];
            readonly internalType: "struct SynapseBridgeFacet.SynapseData";
            readonly name: "_synapseData";
            readonly type: "tuple";
        }];
        readonly name: "swapAndStartBridgeTokensViaSynapseBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "synapseRouter";
        readonly outputs: readonly [{
            readonly internalType: "contract ISynapseRouter";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): SynapseBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SynapseBridgeFacet;
}
export {};
