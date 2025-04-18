import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GasZipFacet, GasZipFacetInterface } from "../GasZipFacet";
declare type GasZipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasZipFacet__factory extends ContractFactory {
    constructor(...args: GasZipFacetConstructorParams);
    deploy(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasZipFacet>;
    getDeployTransaction(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasZipFacet;
    connect(signer: Signer): GasZipFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200276938038062002769833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516126ce6200009b6000396000818161010601526107e701526126ce6000f3fe60806040526004361061005a5760003560e01c8063b49d391d11610043578063b49d391d146100a7578063ba956b9a146100f4578063fc5f10031461012857600080fd5b806346fd98e21461005f578063606326ff14610092575b600080fd5b34801561006b57600080fd5b5061007f61007a366004611f3b565b61013b565b6040519081526020015b60405180910390f35b6100a56100a03660046121c3565b6101cf565b005b3480156100b357600080fd5b506100cf7311f111f111f111f111f111f111f111f111f111f181565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610089565b34801561010057600080fd5b506100cf7f000000000000000000000000000000000000000000000000000000000000000081565b6100a561013636600461223f565b6103bd565b6000816020811115610179576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156101c7578484828181106101965761019661228e565b90506020020160208101906101ab91906122bd565b60ff16600884901b179250806101c090612316565b905061017c565b505092915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161024a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061025b344761234e565b90508680610100015161029a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156102d8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61033488886102e860018261234e565b8181106102f7576102f761228e565b90506020028101906103099190612361565b61031a90608081019060600161239f565b73ffffffffffffffffffffffffffffffffffffffff161590565b61036a576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61037f89600001518a60c001518a8a3361055c565b60c08a015261038e89876106a4565b50479050818111156103af576103af6000846103aa858561234e565b610893565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610438576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561010083015183901561047b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83806101200151156104b9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608085015173ffffffffffffffffffffffffffffffffffffffff161561050b576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8460c001513414610548576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055285856106a4565b5050600090555050565b600082808203610598576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856105a760018561234e565b8181106105b6576105b661228e565b90506020028101906105c89190612361565b6105d990608081019060600161239f565b905060006105e6826108c9565b905073ffffffffffffffffffffffffffffffffffffffff82166106105761060d348261234e565b90505b600061061c8888610982565b90506106288888610a8e565b6106358a89898985610afb565b600082610641856108c9565b61064b919061234e565b905089811015610696576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b80356106dc576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801590610735575060a082015173ffffffffffffffffffffffffffffffffffffffff16813514155b1561076c576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e00151036107a9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08201516040517fc9630cb000000000000000000000000000000000000000000000000000000000815260208301356004820152823560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163c9630cb0916044016000604051808303818588803b15801561083f57600080fd5b505af1158015610853573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108879190612428565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108bf576108ba838383610e93565b505050565b6108ba8282611015565b600073ffffffffffffffffffffffffffffffffffffffff82161561097a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610951573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610975919061253b565b61097c565b475b92915050565b60608160008167ffffffffffffffff8111156109a0576109a0611f7d565b6040519080825280602002602001820160405280156109c9578160200160208202803683370190505b5090506000805b83811015610a83578686828181106109ea576109ea61228e565b90506020028101906109fc9190612361565b610a0d90608081019060600161239f565b9150610a18826108c9565b838281518110610a2a57610a2a61228e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a7b5734838281518110610a6357610a6361228e565b60200260200101818151610a77919061234e565b9052505b6001016109d0565b509095945050505050565b60005b818110156108ba5736838383818110610aac57610aac61228e565b9050602002810190610abe9190612361565b9050610ad060e0820160c08301612554565b15610af257610af2610ae8606083016040840161239f565b826080013561113f565b50600101610a91565b838383838260018114610dae5760008585610b1760018561234e565b818110610b2657610b2661228e565b9050602002810190610b389190612361565b610b4990608081019060600161239f565b9050600089815b81811015610cda57368d8d83818110610b6b57610b6b61228e565b9050602002810190610b7d9190612361565b9050610b9261031a606083016040840161239f565b80610bf55750610bf5610bab604083016020840161239f565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c0c5750610c0c610bab602083018361239f565b8015610c915750610c91610c2360a0830183612571565b610c32916004916000916125d6565b610c3b91612600565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610cc7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cd18f826112b5565b50600101610b50565b505060005b610cea60018561234e565b811015610da6576000888883818110610d0557610d0561228e565b9050602002810190610d179190612361565b610d2890608081019060600161239f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d9d57858281518110610d6f57610d6f61228e565b6020026020010151610d80826108c9565b610d8a919061234e565b92508215610d9d57610d9d818885610893565b50600101610cdf565b505050610e87565b8760005b81811015610e8457368b8b83818110610dcd57610dcd61228e565b9050602002810190610ddf9190612361565b9050610df461031a606083016040840161239f565b80610e0d5750610e0d610bab604083016020840161239f565b8015610e245750610e24610bab602083018361239f565b8015610e3b5750610e3b610c2360a0830183612571565b610e71576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e7b8d826112b5565b50600101610db2565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ee0576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f2d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610f9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbe919061253b565b905080821115611004576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161068d565b61100f848484611593565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611062576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156110a5576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161068d565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146110ff576040519150601f19603f3d011682016040523d82523d6000602084013e611104565b606091505b50509050806108ba576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003611179576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111d257803410156111ce576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561123f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611263919061253b565b9050818110156112a9576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161068d565b6108ba83333085611667565b6112cb6112c5602083018361239f565b3b151590565b611301576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611341576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061135661031a606085016040860161239f565b611361576000611367565b82608001355b9050600061138361137e606086016040870161239f565b6108c9565b9050600061139a61137e608087016060880161239f565b9050826000036113d1576113d16113b7606087016040880161239f565b6113c7604088016020890161239f565b8760800135611881565b846080013582101561141c576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161068d565b60008061142c602088018861239f565b73ffffffffffffffffffffffffffffffffffffffff168561145060a08a018a612571565b60405161145e929190612646565b60006040518083038185875af1925050503d806000811461149b576040519150601f19603f3d011682016040523d82523d6000602084013e6114a0565b606091505b5091509150816114b3576114b3816119b8565b60006114c861137e60808a0160608b0161239f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896114f960208b018b61239f565b61150960608c0160408d0161239f565b61151960808d0160608e0161239f565b8c6080013589871161152b5786611535565b6115358a8861234e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108ba9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526119c2565b73ffffffffffffffffffffffffffffffffffffffff84166116b4576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611701576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611772573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611796919061253b565b90506117a482868686611ad1565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611814573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611838919061253b565b611842919061234e565b14611879576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166118a157505050565b73ffffffffffffffffffffffffffffffffffffffff82166118ee576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611963573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611987919061253b565b10156108ba576108ba83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b2f565b8051602082018181fd5b6000611a24826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c1f9092919063ffffffff16565b9050805160001480611a45575080806020019051810190611a459190612656565b6108ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161068d565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261100f9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016115e5565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611bbb8482611c36565b61100f5760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611c159085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115e5565b61100f84826119c2565b6060611c2e8484600085611cf7565b949350505050565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611c609190612673565b6000604051808303816000865af19150503d8060008114611c9d576040519150601f19603f3d011682016040523d82523d6000602084013e611ca2565b606091505b5091509150818015611ccc575080511580611ccc575080806020019051810190611ccc9190612656565b8015611cee575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b606082471015611d89576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161068d565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611db29190612673565b60006040518083038185875af1925050503d8060008114611def576040519150601f19603f3d011682016040523d82523d6000602084013e611df4565b606091505b5091509150611e0587838387611e10565b979650505050505050565b60608315611ea6578251600003611e9f5773ffffffffffffffffffffffffffffffffffffffff85163b611e9f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161068d565b5081611c2e565b611c2e8383815115611ebb5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068d9190612685565b60008083601f840112611f0157600080fd5b50813567ffffffffffffffff811115611f1957600080fd5b6020830191508360208260051b8501011115611f3457600080fd5b9250929050565b60008060208385031215611f4e57600080fd5b823567ffffffffffffffff811115611f6557600080fd5b611f7185828601611eef565b90969095509350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611fd057611fd0611f7d565b60405290565b600082601f830112611fe757600080fd5b813567ffffffffffffffff8082111561200257612002611f7d565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561204857612048611f7d565b8160405283815286602085880101111561206157600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120a557600080fd5b919050565b80151581146120b857600080fd5b50565b80356120a5816120aa565b600061014082840312156120d957600080fd5b6120e1611fac565b905081358152602082013567ffffffffffffffff8082111561210257600080fd5b61210e85838601611fd6565b6020840152604084013591508082111561212757600080fd5b5061213484828501611fd6565b60408301525061214660608301612081565b606082015261215760808301612081565b608082015261216860a08301612081565b60a082015260c082013560c082015260e082013560e082015261010061218f8184016120bb565b908201526101206121a18382016120bb565b9082015292915050565b6000604082840312156121bd57600080fd5b50919050565b600080600080608085870312156121d957600080fd5b843567ffffffffffffffff808211156121f157600080fd5b6121fd888389016120c6565b9550602087013591508082111561221357600080fd5b5061222087828801611eef565b9094509250612234905086604087016121ab565b905092959194509250565b6000806060838503121561225257600080fd5b823567ffffffffffffffff81111561226957600080fd5b612275858286016120c6565b92505061228584602085016121ab565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156122cf57600080fd5b813560ff811681146122e057600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612347576123476122e7565b5060010190565b8181038181111561097c5761097c6122e7565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261239557600080fd5b9190910192915050565b6000602082840312156123b157600080fd5b6122e082612081565b60005b838110156123d55781810151838201526020016123bd565b50506000910152565b600081518084526123f68160208601602086016123ba565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124516101608501836123de565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261248c83826123de565b92505060608501516124b6608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125298187018315159052565b90950151151593019290925250919050565b60006020828403121561254d57600080fd5b5051919050565b60006020828403121561256657600080fd5b81356122e0816120aa565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125a657600080fd5b83018035915067ffffffffffffffff8211156125c157600080fd5b602001915036819003821315611f3457600080fd5b600080858511156125e657600080fd5b838611156125f357600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156101c75760049490940360031b84901b1690921692915050565b8183823760009101908152919050565b60006020828403121561266857600080fd5b81516122e0816120aa565b600082516123958184602087016123ba565b6020815260006122e060208301846123de56fea26469706673582212202e8595f7da5afc37913fb258a43f5a5a9449793f7d9994df313b29965e1b8c6864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gasZipRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "NON_EVM_ADDRESS";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "gasZipRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGasZip";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDestinationChainsValue";
        readonly inputs: readonly [{
            readonly name: "_chainIds";
            readonly type: "uint8[]";
            readonly internalType: "uint8[]";
        }];
        readonly outputs: readonly [{
            readonly name: "destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGasZip";
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
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGasZip";
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
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
        readonly name: "InvalidCallData";
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
        readonly name: "OnlyNativeAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TooManyChainIds";
        readonly inputs: readonly [];
    }];
    static createInterface(): GasZipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasZipFacet;
}
export {};
