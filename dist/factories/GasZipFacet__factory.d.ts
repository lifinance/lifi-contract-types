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
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051612697380380612697833981016040819052602b91603b565b6001600160a01b03166080526066565b5f60208284031215604a575f5ffd5b81516001600160a01b0381168114605f575f5ffd5b9392505050565b6080516126126100855f395f818161010001526107cf01526126125ff3fe608060405260043610610058575f3560e01c8063b49d391d11610041578063b49d391d146100a3578063ba956b9a146100ef578063fc5f100314610122575f5ffd5b806346fd98e21461005c578063606326ff1461008e575b5f5ffd5b348015610067575f5ffd5b5061007b610076366004611ee2565b610135565b6040519081526020015b60405180910390f35b6100a161009c366004612162565b6101c1565b005b3480156100ae575f5ffd5b506100ca7311f111f111f111f111f111f111f111f111f111f181565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610085565b3480156100fa575f5ffd5b506100ca7f000000000000000000000000000000000000000000000000000000000000000081565b6100a16101303660046121de565b6103ab565b5f816020811115610172576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b818110156101b95784848281811061018e5761018e61222a565b90506020020160208101906101a39190612257565b60ff16600884901b179250806001019050610174565b505092915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161023c576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61024c344761227e565b90508680610100015161028b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156102c9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61032588886102d960018261227e565b8181106102e8576102e861222a565b90506020028101906102fa91906122b6565b61030b9060808101906060016122f2565b73ffffffffffffffffffffffffffffffffffffffff161590565b61035b576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61036f895f01518a60c001518a8a33610549565b60c08a015261037e898761068c565b504790508181111561039e5761039e5f84610399858561227e565b610877565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610426576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155610100830151839015610469576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83806101200151156104a7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608085015173ffffffffffffffffffffffffffffffffffffffff16156104f9576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8460c001513414610536576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610540858561068c565b50505f90555050565b5f82808203610584576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561059260018561227e565b8181106105a1576105a161222a565b90506020028101906105b391906122b6565b6105c49060808101906060016122f2565b90505f6105d0826108ad565b905073ffffffffffffffffffffffffffffffffffffffff82166105fa576105f7348261227e565b90505b5f6106058888610963565b90506106118888610a6d565b61061e8a89898985610ad9565b5f82610629856108ad565b610633919061227e565b90508981101561067e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b80356106c4576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11480159061071d575060a082015173ffffffffffffffffffffffffffffffffffffffff16813514155b15610754576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e0015103610791576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08201516040517fc9630cb000000000000000000000000000000000000000000000000000000000815260208301356004820152823560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163c9630cb0916044015f604051808303818588803b158015610825575f5ffd5b505af1158015610837573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161086b9190612357565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108a35761089e838383610e6a565b505050565b61089e8282610fe9565b5f73ffffffffffffffffffffffffffffffffffffffff82161561095b576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610932573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610956919061246a565b61095d565b475b92915050565b6060815f8167ffffffffffffffff81111561098057610980611f21565b6040519080825280602002602001820160405280156109a9578160200160208202803683370190505b5090505f805b83811015610a62578686828181106109c9576109c961222a565b90506020028101906109db91906122b6565b6109ec9060808101906060016122f2565b91506109f7826108ad565b838281518110610a0957610a0961222a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a5a5734838281518110610a4257610a4261222a565b60200260200101818151610a56919061227e565b9052505b6001016109af565b509095945050505050565b5f5b8181101561089e5736838383818110610a8a57610a8a61222a565b9050602002810190610a9c91906122b6565b9050610aae60e0820160c08301612481565b15610ad057610ad0610ac660608301604084016122f2565b826080013561110f565b50600101610a6f565b838383838260018114610d86575f8585610af460018561227e565b818110610b0357610b0361222a565b9050602002810190610b1591906122b6565b610b269060808101906060016122f2565b90505f89815b81811015610cb357368d8d83818110610b4757610b4761222a565b9050602002810190610b5991906122b6565b9050610b6e61030b60608301604084016122f2565b80610bd05750610bd0610b8760408301602084016122f2565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610be75750610be7610b8760208301836122f2565b8015610c6a5750610c6a610bfe60a083018361249c565b610c0c916004915f916124fd565b610c1591612524565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610ca0576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610caa8f82611281565b50600101610b2c565b505f90505b610cc360018561227e565b811015610d7e575f888883818110610cdd57610cdd61222a565b9050602002810190610cef91906122b6565b610d009060808101906060016122f2565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d7557858281518110610d4757610d4761222a565b6020026020010151610d58826108ad565b610d62919061227e565b92508215610d7557610d75818885610877565b50600101610cb8565b505050610e5e565b875f5b81811015610e5b57368b8b83818110610da457610da461222a565b9050602002810190610db691906122b6565b9050610dcb61030b60608301604084016122f2565b80610de45750610de4610b8760408301602084016122f2565b8015610dfb5750610dfb610b8760208301836122f2565b8015610e125750610e12610bfe60a083018361249c565b610e48576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e528d82611281565b50600101610d89565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610eb7576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f04576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610f6e573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f92919061246a565b905080821115610fd8576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610675565b610fe3848484611554565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611036576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611079576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610675565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146110cf576040519150601f19603f3d011682016040523d82523d5f602084013e6110d4565b606091505b505090508061089e576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805f03611148576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111a1578034101561119d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561120b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061122f919061246a565b905081811015611275576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610675565b61089e83333085611628565b61129761129160208301836122f2565b3b151590565b6112cd576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361130c576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61132061030b60608501604086016122f2565b61132a575f611330565b82608001355b90505f61134b61134660608601604087016122f2565b6108ad565b90505f61136161134660808701606088016122f2565b9050825f036113975761139761137d60608701604088016122f2565b61138d60408801602089016122f2565b876080013561183d565b84608001358210156113e2576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610675565b5f806113f160208801886122f2565b73ffffffffffffffffffffffffffffffffffffffff168561141560a08a018a61249c565b60405161142392919061258a565b5f6040518083038185875af1925050503d805f811461145d576040519150601f19603f3d011682016040523d82523d5f602084013e611462565b606091505b5091509150816114755761147581611972565b5f61148961134660808a0160608b016122f2565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896114ba60208b018b6122f2565b6114ca60608c0160408d016122f2565b6114da60808d0160608e016122f2565b8c608001358987116114ec57866114f6565b6114f68a8861227e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261089e9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261197c565b73ffffffffffffffffffffffffffffffffffffffff8416611675576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166116c2576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa158015611730573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611754919061246a565b905061176282868686611a89565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156117d0573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117f4919061246a565b6117fe919061227e565b14611835576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661185d57505050565b73ffffffffffffffffffffffffffffffffffffffff82166118aa576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa15801561191d573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611941919061246a565b101561089e5761089e83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611ae7565b8051602082018181fd5b5f6119dd826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611bd69092919063ffffffff16565b905080515f14806119fd5750808060200190518101906119fd9190612599565b61089e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610675565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610fe39085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016115a6565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611b738482611bec565b610fe35760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f6044820152611bcc9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115a6565b610fe3848261197c565b6060611be484845f85611ca7565b949350505050565b5f5f5f8473ffffffffffffffffffffffffffffffffffffffff1684604051611c1491906125b4565b5f604051808303815f865af19150503d805f8114611c4d576040519150601f19603f3d011682016040523d82523d5f602084013e611c52565b606091505b5091509150818015611c7c575080511580611c7c575080806020019051810190611c7c9190612599565b8015611c9e575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b606082471015611d39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610675565b5f5f8673ffffffffffffffffffffffffffffffffffffffff168587604051611d6191906125b4565b5f6040518083038185875af1925050503d805f8114611d9b576040519150601f19603f3d011682016040523d82523d5f602084013e611da0565b606091505b5091509150611db187838387611dbc565b979650505050505050565b60608315611e515782515f03611e4a5773ffffffffffffffffffffffffffffffffffffffff85163b611e4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610675565b5081611be4565b611be48383815115611e665781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067591906125ca565b5f5f83601f840112611eaa575f5ffd5b50813567ffffffffffffffff811115611ec1575f5ffd5b6020830191508360208260051b8501011115611edb575f5ffd5b9250929050565b5f5f60208385031215611ef3575f5ffd5b823567ffffffffffffffff811115611f09575f5ffd5b611f1585828601611e9a565b90969095509350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611f7257611f72611f21565b60405290565b5f82601f830112611f87575f5ffd5b813567ffffffffffffffff811115611fa157611fa1611f21565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611fee57611fee611f21565b604052818152838201602001851015612005575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114612044575f5ffd5b919050565b8015158114612056575f5ffd5b50565b803561204481612049565b5f6101408284031215612075575f5ffd5b61207d611f4e565b823581529050602082013567ffffffffffffffff81111561209c575f5ffd5b6120a884828501611f78565b602083015250604082013567ffffffffffffffff8111156120c7575f5ffd5b6120d384828501611f78565b6040830152506120e560608301612021565b60608201526120f660808301612021565b608082015261210760a08301612021565b60a082015260c0828101359082015260e0808301359082015261212d6101008301612059565b6101008201526121406101208301612059565b61012082015292915050565b5f6040828403121561215c575f5ffd5b50919050565b5f5f5f5f60808587031215612175575f5ffd5b843567ffffffffffffffff81111561218b575f5ffd5b61219787828801612064565b945050602085013567ffffffffffffffff8111156121b3575f5ffd5b6121bf87828801611e9a565b90945092506121d39050866040870161214c565b905092959194509250565b5f5f606083850312156121ef575f5ffd5b823567ffffffffffffffff811115612205575f5ffd5b61221185828601612064565b925050612221846020850161214c565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215612267575f5ffd5b813560ff81168114612277575f5ffd5b9392505050565b8181038181111561095d577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126122e8575f5ffd5b9190910192915050565b5f60208284031215612302575f5ffd5b61227782612021565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f6020830151610140604084015261237e61016084018261230b565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526123b9828261230b565b91505060608401516123e3608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161245261012085018215159052565b50610120840151801515610140850152509392505050565b5f6020828403121561247a575f5ffd5b5051919050565b5f60208284031215612491575f5ffd5b813561227781612049565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126124cf575f5ffd5b83018035915067ffffffffffffffff8211156124e9575f5ffd5b602001915036819003821315611edb575f5ffd5b5f5f8585111561250b575f5ffd5b83861115612517575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612583577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f602082840312156125a9575f5ffd5b815161227781612049565b5f82518060208501845e5f920191825250919050565b602081525f612277602083018461230b56fea26469706673582212209ee2c8e381d9a96a1cb7d6805c4c1aa212543b262e8c2ac4f7dc4477d814ec9664736f6c634300081d0033";
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
