import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CelerCircleBridgeFacet, CelerCircleBridgeFacetInterface } from "../CelerCircleBridgeFacet";
declare type CelerCircleBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CelerCircleBridgeFacet__factory extends ContractFactory {
    constructor(...args: CelerCircleBridgeFacetConstructorParams);
    deploy(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CelerCircleBridgeFacet>;
    getDeployTransaction(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CelerCircleBridgeFacet;
    connect(signer: Signer): CelerCircleBridgeFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b50604051620027f8380380620027f8833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a05161270b620000ed600039600081816102440152818161050b01528181610598015281816107ee01526108a501526000818161080f01526108cd015261270b6000f3fe6080604052600436106100295760003560e01c80638fab06631461002e578063bab657d814610043575b600080fd5b61004161003c366004612219565b610063565b005b34801561004f57600080fd5b5061004161005e3660046122b3565b610320565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100de576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100ef34476122f6565b90508580610100015161012e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561016c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761018f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101c6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610204576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610241576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b887f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102cc576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102e18b600001518c60c001518c8c336105df565b60c08c01526102ef8b610727565b50479350505050818111156103135761031360008461030e85856122f6565b610975565b5050600090915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161039b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556103a882612330565b806101000151156103e5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103ee83612330565b8061012001511561042b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043484612330565b60a081015173ffffffffffffffffffffffffffffffffffffffff16610485576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104c3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610500576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61050985612330565b7f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610593576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105c17f00000000000000000000000000000000000000000000000000000000000000008860c001356109ab565b6105d26105cd88612330565b610727565b5050600090935550505050565b60008280820361061b576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561062a6001856122f6565b8181106106395761063961233c565b905060200281019061064b919061236b565b61065c9060808101906060016123a9565b9050600061066982610b21565b905073ffffffffffffffffffffffffffffffffffffffff82166106935761069034826122f6565b90505b600061069f8888610bda565b90506106ab8888610ce6565b6106b88a89898985610d53565b6000826106c485610b21565b6106ce91906122f6565b905089811015610719576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60e081015167ffffffffffffffff10156107e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604160248201527f5f627269646765446174612e64657374696e6174696f6e436861696e4964207060448201527f617373656420697320746f6f2062696720746f2066697420696e2075696e743660648201527f3400000000000000000000000000000000000000000000000000000000000000608482015260a401610710565b6108387f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008360c00151611105565b60c081015160e082015160a08301516040517f2fbb00ac000000000000000000000000000000000000000000000000000000008152600481019390935267ffffffffffffffff909116602483015273ffffffffffffffffffffffffffffffffffffffff90811660448301527f0000000000000000000000000000000000000000000000000000000000000000811660648301527f00000000000000000000000000000000000000000000000000000000000000001690632fbb00ac906084016020604051808303816000875af1158015610916573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093a91906123c4565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161096a919061245c565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff8316156109a15761099c83838361123c565b505050565b61099c82826113be565b806000036109e5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a3e5780341015610a3a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610aab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acf919061256f565b905081811015610b15576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610710565b61099c833330856114e8565b600073ffffffffffffffffffffffffffffffffffffffff821615610bd2576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610ba9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcd919061256f565b610bd4565b475b92915050565b60608160008167ffffffffffffffff811115610bf857610bf8611feb565b604051908082528060200260200182016040528015610c21578160200160208202803683370190505b5090506000805b83811015610cdb57868682818110610c4257610c4261233c565b9050602002810190610c54919061236b565b610c659060808101906060016123a9565b9150610c7082610b21565b838281518110610c8257610c8261233c565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610cd35734838281518110610cbb57610cbb61233c565b60200260200101818151610ccf91906122f6565b9052505b600101610c28565b509095945050505050565b60005b8181101561099c5736838383818110610d0457610d0461233c565b9050602002810190610d16919061236b565b9050610d2860e0820160c08301612588565b15610d4a57610d4a610d4060608301604084016123a9565b82608001356109ab565b50600101610ce9565b8383838382600181146110205760008585610d6f6001856122f6565b818110610d7e57610d7e61233c565b9050602002810190610d90919061236b565b610da19060808101906060016123a9565b9050600089815b81811015610f4c57368d8d83818110610dc357610dc361233c565b9050602002810190610dd5919061236b565b9050610e04610dea60608301604084016123a9565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e675750610e67610e1d60408301602084016123a9565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e7e5750610e7e610e1d60208301836123a9565b8015610f035750610f03610e9560a08301836125a5565b610ea491600491600091612611565b610ead9161263b565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f39576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f438f82611702565b50600101610da8565b505060005b610f5c6001856122f6565b811015611018576000888883818110610f7757610f7761233c565b9050602002810190610f89919061236b565b610f9a9060808101906060016123a9565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461100f57858281518110610fe157610fe161233c565b6020026020010151610ff282610b21565b610ffc91906122f6565b9250821561100f5761100f818885610975565b50600101610f51565b5050506110f9565b8760005b818110156110f657368b8b8381811061103f5761103f61233c565b9050602002810190611051919061236b565b9050611066610dea60608301604084016123a9565b8061107f575061107f610e1d60408301602084016123a9565b80156110965750611096610e1d60208301836123a9565b80156110ad57506110ad610e9560a08301836125a5565b6110e3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110ed8d82611702565b50600101611024565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661112557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611172576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156111e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120b919061256f565b101561099c5761099c83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119e0565b73ffffffffffffffffffffffffffffffffffffffff8316611289576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166112d6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611343573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611367919061256f565b9050808211156113ad576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610710565b6113b8848484611b4e565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661140b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561144e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610710565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146114a8576040519150601f19603f3d011682016040523d82523d6000602084013e6114ad565b606091505b505090508061099c576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611535576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611582576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156115f3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611617919061256f565b905061162582868686611ba4565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611695573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116b9919061256f565b6116c391906122f6565b146116fa576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61171861171260208301836123a9565b3b151590565b61174e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361178e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006117a3610dea60608501604086016123a9565b6117ae5760006117b4565b82608001355b905060006117d06117cb60608601604087016123a9565b610b21565b905060006117e76117cb60808701606088016123a9565b90508260000361181e5761181e61180460608701604088016123a9565b61181460408801602089016123a9565b8760800135611105565b8460800135821015611869576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610710565b60008061187960208801886123a9565b73ffffffffffffffffffffffffffffffffffffffff168561189d60a08a018a6125a5565b6040516118ab929190612683565b60006040518083038185875af1925050503d80600081146118e8576040519150601f19603f3d011682016040523d82523d6000602084013e6118ed565b606091505b5091509150816119005761190081611c02565b60006119156117cb60808a0160608b016123a9565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961194660208b018b6123a9565b61195660608c0160408d016123a9565b61196660808d0160608e016123a9565b8c608001358987116119785786611982565b6119828a886122f6565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611a6c8482611c0c565b6113b85760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611b449085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611ccd565b6113b88482611ccd565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261099c9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611ac2565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113b89085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611ac2565b8051602082018181fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611c369190612693565b6000604051808303816000865af19150503d8060008114611c73576040519150601f19603f3d011682016040523d82523d6000602084013e611c78565b606091505b5091509150818015611ca2575080511580611ca2575080806020019051810190611ca291906126a5565b8015611cc4575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b6000611d2f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611ddc9092919063ffffffff16565b9050805160001480611d50575080806020019051810190611d5091906126a5565b61099c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610710565b6060611deb8484600085611df3565b949350505050565b606082471015611e85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610710565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611eae9190612693565b60006040518083038185875af1925050503d8060008114611eeb576040519150601f19603f3d011682016040523d82523d6000602084013e611ef0565b606091505b5091509150611f0187838387611f0c565b979650505050505050565b60608315611fa2578251600003611f9b5773ffffffffffffffffffffffffffffffffffffffff85163b611f9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610710565b5081611deb565b611deb8383815115611fb75781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071091906126c2565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561203e5761203e611feb565b60405290565b600082601f83011261205557600080fd5b813567ffffffffffffffff8082111561207057612070611feb565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156120b6576120b6611feb565b816040528381528660208588010111156120cf57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461211357600080fd5b919050565b801515811461212657600080fd5b50565b803561211381612118565b6000610140828403121561214757600080fd5b61214f61201a565b905081358152602082013567ffffffffffffffff8082111561217057600080fd5b61217c85838601612044565b6020840152604084013591508082111561219557600080fd5b506121a284828501612044565b6040830152506121b4606083016120ef565b60608201526121c5608083016120ef565b60808201526121d660a083016120ef565b60a082015260c082013560c082015260e082013560e08201526101006121fd818401612129565b9082015261012061220f838201612129565b9082015292915050565b60008060006040848603121561222e57600080fd5b833567ffffffffffffffff8082111561224657600080fd5b61225287838801612134565b9450602086013591508082111561226857600080fd5b818601915086601f83011261227c57600080fd5b81358181111561228b57600080fd5b8760208260051b85010111156122a057600080fd5b6020830194508093505050509250925092565b6000602082840312156122c557600080fd5b813567ffffffffffffffff8111156122dc57600080fd5b820161014081850312156122ef57600080fd5b9392505050565b81810381811115610bd4577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610bd43683612134565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261239f57600080fd5b9190910192915050565b6000602082840312156123bb57600080fd5b6122ef826120ef565b6000602082840312156123d657600080fd5b815167ffffffffffffffff811681146122ef57600080fd5b60005b838110156124095781810151838201526020016123f1565b50506000910152565b6000815180845261242a8160208601602086016123ee565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612485610160850183612412565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526124c08382612412565b92505060608501516124ea608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061255d8187018315159052565b90950151151593019290925250919050565b60006020828403121561258157600080fd5b5051919050565b60006020828403121561259a57600080fd5b81356122ef81612118565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125da57600080fd5b83018035915067ffffffffffffffff8211156125f557600080fd5b60200191503681900382131561260a57600080fd5b9250929050565b6000808585111561262157600080fd5b8386111561262e57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561267b5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000825161239f8184602087016123ee565b6000602082840312156126b757600080fd5b81516122ef81612118565b6020815260006122ef602083018461241256fea26469706673582212203a8c439684fb82a2d2f943c45fa172aafa9900b599271dd727acf10086d7140964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_circleBridgeProxy";
            readonly type: "address";
            readonly internalType: "contract ICircleBridgeProxy";
        }, {
            readonly name: "_usdc";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCelerCircleBridge";
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
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaCelerCircleBridge";
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
        readonly name: "InvalidSendingToken";
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
    static createInterface(): CelerCircleBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CelerCircleBridgeFacet;
}
export {};
