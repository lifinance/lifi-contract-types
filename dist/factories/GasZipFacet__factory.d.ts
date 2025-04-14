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
    static readonly bytecode = "0x60a060405234801562000010575f80fd5b506040516200269038038062002690833981016040819052620000339162000045565b6001600160a01b031660805262000074565b5f6020828403121562000056575f80fd5b81516001600160a01b03811681146200006d575f80fd5b9392505050565b6080516125fc620000945f395f818161010001526107cf01526125fc5ff3fe608060405260043610610058575f3560e01c8063b49d391d11610041578063b49d391d146100a3578063ba956b9a146100ef578063fc5f100314610122575f80fd5b806346fd98e21461005c578063606326ff1461008e575b5f80fd5b348015610067575f80fd5b5061007b610076366004611ee1565b610135565b6040519081526020015b60405180910390f35b6100a161009c366004612158565b6101c1565b005b3480156100ae575f80fd5b506100ca7311f111f111f111f111f111f111f111f111f111f181565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610085565b3480156100fa575f80fd5b506100ca7f000000000000000000000000000000000000000000000000000000000000000081565b6100a16101303660046121cf565b6103ab565b5f816020811115610172576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b818110156101b95784848281811061018e5761018e61221b565b90506020020160208101906101a39190612248565b60ff16600884901b179250806001019050610174565b505092915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161023c576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61024c344761226f565b90508680610100015161028b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156102c9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61032588886102d960018261226f565b8181106102e8576102e861221b565b90506020028101906102fa91906122a7565b61030b9060808101906060016122e3565b73ffffffffffffffffffffffffffffffffffffffff161590565b61035b576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61036f895f01518a60c001518a8a33610549565b60c08a015261037e898761068c565b504790508181111561039e5761039e5f84610399858561226f565b610877565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610426576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155610100830151839015610469576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83806101200151156104a7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608085015173ffffffffffffffffffffffffffffffffffffffff16156104f9576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8460c001513414610536576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610540858561068c565b50505f90555050565b5f82808203610584576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561059260018561226f565b8181106105a1576105a161221b565b90506020028101906105b391906122a7565b6105c49060808101906060016122e3565b90505f6105d0826108ad565b905073ffffffffffffffffffffffffffffffffffffffff82166105fa576105f7348261226f565b90505b5f6106058888610963565b90506106118888610a6d565b61061e8a89898985610ad9565b5f82610629856108ad565b610633919061226f565b90508981101561067e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b80356106c4576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11480159061071d575060a082015173ffffffffffffffffffffffffffffffffffffffff16813514155b15610754576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e0015103610791576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08201516040517fc9630cb000000000000000000000000000000000000000000000000000000000815260208301356004820152823560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163c9630cb0916044015f604051808303818588803b158015610825575f80fd5b505af1158015610837573d5f803e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161086b9190612367565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108a35761089e838383610e69565b505050565b61089e8282610fe8565b5f73ffffffffffffffffffffffffffffffffffffffff82161561095b576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610932573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109569190612479565b61095d565b475b92915050565b6060815f8167ffffffffffffffff81111561098057610980611f20565b6040519080825280602002602001820160405280156109a9578160200160208202803683370190505b5090505f805b83811015610a62578686828181106109c9576109c961221b565b90506020028101906109db91906122a7565b6109ec9060808101906060016122e3565b91506109f7826108ad565b838281518110610a0957610a0961221b565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a5a5734838281518110610a4257610a4261221b565b60200260200101818151610a56919061226f565b9052505b6001016109af565b509095945050505050565b5f5b8181101561089e5736838383818110610a8a57610a8a61221b565b9050602002810190610a9c91906122a7565b9050610aae60e0820160c08301612490565b15610ad057610ad0610ac660608301604084016122e3565b826080013561110e565b50600101610a6f565b838383838260018114610d85575f8585610af460018561226f565b818110610b0357610b0361221b565b9050602002810190610b1591906122a7565b610b269060808101906060016122e3565b90505f89815b81811015610cb357368d8d83818110610b4757610b4761221b565b9050602002810190610b5991906122a7565b9050610b6e61030b60608301604084016122e3565b80610bd05750610bd0610b8760408301602084016122e3565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610be75750610be7610b8760208301836122e3565b8015610c6a5750610c6a610bfe60a08301836124ab565b610c0c916004915f9161250c565b610c1591612533565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610ca0576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610caa8f82611280565b50600101610b2c565b50505f5b610cc260018561226f565b811015610d7d575f888883818110610cdc57610cdc61221b565b9050602002810190610cee91906122a7565b610cff9060808101906060016122e3565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d7457858281518110610d4657610d4661221b565b6020026020010151610d57826108ad565b610d61919061226f565b92508215610d7457610d74818885610877565b50600101610cb7565b505050610e5d565b875f5b81811015610e5a57368b8b83818110610da357610da361221b565b9050602002810190610db591906122a7565b9050610dca61030b60608301604084016122e3565b80610de35750610de3610b8760408301602084016122e3565b8015610dfa5750610dfa610b8760208301836122e3565b8015610e115750610e11610bfe60a08301836124ab565b610e47576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e518d82611280565b50600101610d88565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610eb6576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f03576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610f6d573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f919190612479565b905080821115610fd7576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610675565b610fe2848484611553565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611035576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611078576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610675565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146110ce576040519150601f19603f3d011682016040523d82523d5f602084013e6110d3565b606091505b505090508061089e576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805f03611147576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111a0578034101561119c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561120a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061122e9190612479565b905081811015611274576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610675565b61089e83333085611627565b61129661129060208301836122e3565b3b151590565b6112cc576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361130b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61131f61030b60608501604086016122e3565b611329575f61132f565b82608001355b90505f61134a61134560608601604087016122e3565b6108ad565b90505f61136061134560808701606088016122e3565b9050825f036113965761139661137c60608701604088016122e3565b61138c60408801602089016122e3565b876080013561183c565b84608001358210156113e1576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610675565b5f806113f060208801886122e3565b73ffffffffffffffffffffffffffffffffffffffff168561141460a08a018a6124ab565b604051611422929190612579565b5f6040518083038185875af1925050503d805f811461145c576040519150601f19603f3d011682016040523d82523d5f602084013e611461565b606091505b5091509150816114745761147481611971565b5f61148861134560808a0160608b016122e3565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896114b960208b018b6122e3565b6114c960608c0160408d016122e3565b6114d960808d0160608e016122e3565b8c608001358987116114eb57866114f5565b6114f58a8861226f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261089e9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261197b565b73ffffffffffffffffffffffffffffffffffffffff8416611674576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166116c1576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa15801561172f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117539190612479565b905061176182868686611a88565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156117cf573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117f39190612479565b6117fd919061226f565b14611834576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661185c57505050565b73ffffffffffffffffffffffffffffffffffffffff82166118a9576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa15801561191c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119409190612479565b101561089e5761089e83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611ae6565b8051602082018181fd5b5f6119dc826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611bd59092919063ffffffff16565b905080515f14806119fc5750808060200190518101906119fc9190612588565b61089e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610675565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610fe29085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016115a5565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611b728482611beb565b610fe25760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f6044820152611bcb9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115a5565b610fe2848261197b565b6060611be384845f85611ca6565b949350505050565b5f805f8473ffffffffffffffffffffffffffffffffffffffff1684604051611c1391906125a3565b5f604051808303815f865af19150503d805f8114611c4c576040519150601f19603f3d011682016040523d82523d5f602084013e611c51565b606091505b5091509150818015611c7b575080511580611c7b575080806020019051810190611c7b9190612588565b8015611c9d575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b606082471015611d38576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610675565b5f808673ffffffffffffffffffffffffffffffffffffffff168587604051611d6091906125a3565b5f6040518083038185875af1925050503d805f8114611d9a576040519150601f19603f3d011682016040523d82523d5f602084013e611d9f565b606091505b5091509150611db087838387611dbb565b979650505050505050565b60608315611e505782515f03611e495773ffffffffffffffffffffffffffffffffffffffff85163b611e49576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610675565b5081611be3565b611be38383815115611e655781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067591906125b4565b5f8083601f840112611ea9575f80fd5b50813567ffffffffffffffff811115611ec0575f80fd5b6020830191508360208260051b8501011115611eda575f80fd5b9250929050565b5f8060208385031215611ef2575f80fd5b823567ffffffffffffffff811115611f08575f80fd5b611f1485828601611e99565b90969095509350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611f7157611f71611f20565b60405290565b5f82601f830112611f86575f80fd5b813567ffffffffffffffff80821115611fa157611fa1611f20565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611fe757611fe7611f20565b81604052838152866020858801011115611fff575f80fd5b836020870160208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114612041575f80fd5b919050565b8015158114612053575f80fd5b50565b803561204181612046565b5f6101408284031215612072575f80fd5b61207a611f4d565b905081358152602082013567ffffffffffffffff8082111561209a575f80fd5b6120a685838601611f77565b602084015260408401359150808211156120be575f80fd5b506120cb84828501611f77565b6040830152506120dd6060830161201e565b60608201526120ee6080830161201e565b60808201526120ff60a0830161201e565b60a082015260c082013560c082015260e082013560e0820152610100612126818401612056565b90820152610120612138838201612056565b9082015292915050565b5f60408284031215612152575f80fd5b50919050565b5f805f806080858703121561216b575f80fd5b843567ffffffffffffffff80821115612182575f80fd5b61218e88838901612061565b955060208701359150808211156121a3575f80fd5b506121b087828801611e99565b90945092506121c490508660408701612142565b905092959194509250565b5f80606083850312156121e0575f80fd5b823567ffffffffffffffff8111156121f6575f80fd5b61220285828601612061565b9250506122128460208501612142565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215612258575f80fd5b813560ff81168114612268575f80fd5b9392505050565b8181038181111561095d577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126122d9575f80fd5b9190910192915050565b5f602082840312156122f3575f80fd5b6122688261201e565b5f5b838110156123165781810151838201526020016122fe565b50505f910152565b5f81518084526123358160208601602086016122fc565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201525f602083015161014080604085015261238f61016085018361231e565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526123ca838261231e565b92505060608501516123f4608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206124678187018315159052565b90950151151593019290925250919050565b5f60208284031215612489575f80fd5b5051919050565b5f602082840312156124a0575f80fd5b813561226881612046565b5f8083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126124de575f80fd5b83018035915067ffffffffffffffff8211156124f8575f80fd5b602001915036819003821315611eda575f80fd5b5f808585111561251a575f80fd5b83861115612526575f80fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156101b95760049490940360031b84901b1690921692915050565b818382375f9101908152919050565b5f60208284031215612598575f80fd5b815161226881612046565b5f82516122d98184602087016122fc565b602081525f612268602083018461231e56fea2646970667358221220bea3bc6a2f523bc630846f2b0cdc24981c4bb6ff233cdf7e8bf16081825f40f064736f6c63430008160033";
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
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
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
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
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
