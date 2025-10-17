import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { EcoFacet, EcoFacetInterface } from "../EcoFacet";
type EcoFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EcoFacet__factory extends ContractFactory {
    constructor(...args: EcoFacetConstructorParams);
    deploy(_portal: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<EcoFacet>;
    getDeployTransaction(_portal: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): EcoFacet;
    connect(signer: Signer): EcoFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051612ac6380380612ac683398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b608051612a076100bf5f395f8181604801528181610b2b01528181610bfb0152610c370152612a075ff3fe608060405260043610610033575f3560e01c80630ff754ea146100375780637e56b7b0146100935780639e75aa95146100b4575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561009e575f5ffd5b506100b26100ad366004612061565b6100c7565b005b6100b26100c23660046120c6565b61031b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610142576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560a0830151839073ffffffffffffffffffffffffffffffffffffffff16610199576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101d6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610213576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8380610100015115610251576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b848061012001511561028f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856102b2816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102e9576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102f387876105dc565b61030587608001518860c00151610992565b61030f8787610a46565b50505f90925550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610396576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103a6344761218c565b9050868061010001516103e5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876104088160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561043f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361047c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88806101200151156104f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8961051a816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610551576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055b8b896105dc565b5f6105708c5f01518d60c001518d8d33610d67565b90508b60c001518111156105a2575f8c60c001518261058f919061218c565b90506105a08d608001513383610ea9565b505b6105ac8c8a610a46565b50479350505050818111156105cf576105cf5f846105ca858561218c565b610f1c565b50505f9091555050505050565b5f6105ed60408301602084016121c4565b73ffffffffffffffffffffffffffffffffffffffff160361063a576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61064b60c0830160a084016121c4565b73ffffffffffffffffffffffffffffffffffffffff1603610698576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b426106a960608301604084016121f6565b67ffffffffffffffff16116106ea576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015160e0830151660416edef1601be147fffffffffffffffffffffffffee0eee0eee0eee0eee0eee0eee0eee0eee0eee0f73ffffffffffffffffffffffffffffffffffffffff8316016108475780610771576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61077b838061220f565b90505f036107b5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808301356107f0576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61013f610800606085018561220f565b905014610839576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61084283610f4c565b61098c565b610854606084018461220f565b90505f0361088e576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156108c6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6108d4606085018561220f565b8101906108e19190612438565b60a081015180519192505f916108f99060019061218c565b8151811061090957610909612505565b60200260200101516020015190505f602482015190508660a0015173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610988576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505b50505050565b805f036109cb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a245780341015610a20576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a2073ffffffffffffffffffffffffffffffffffffffff831633308461100e565b60c08201515f610a57848484611066565b90505f6606b2787ad08cbc8560e0015103610a775750632b6653dc610ae1565b660416edef1601be8560e0015103610a94575063536f6c4d610ae1565b60e085015167ffffffffffffffff1015610ada576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5060e08401515b5f610af982610af3606088018861220f565b866111ec565b90505f6040517f1299d617000000000000000000000000000000000000000000000000000000008152600481018390527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690631299d61790602401602060405180830381865afa158015610b85573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ba9919061255f565b6003811115610bba57610bba612532565b14610bf1576040517fe431e17800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c2086608001517f0000000000000000000000000000000000000000000000000000000000000000866112af565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663df00f8fa83610c6a606089018961220f565b875f6040518663ffffffff1660e01b8152600401610c8c959493929190612689565b60408051808303815f875af1158015610ca7573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ccb91906126d3565b5050660416edef1601be8660e0015103610d285760e086015186517ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b610d11888061220f565b604051610d1f929190612701565b60405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610d579190612768565b60405180910390a1505050505050565b5f82808203610da2576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610db060018561218c565b818110610dbf57610dbf612505565b9050602002810190610dd1919061287b565b610de29060808101906060016121c4565b90505f610dee826112db565b905073ffffffffffffffffffffffffffffffffffffffff8216610e1857610e15348261218c565b90505b5f610e238888611325565b9050610e2f888861142f565b610e3c8a8989898561149b565b5f82610e47856112db565b610e51919061218c565b905089811015610e9b576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610ef6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f1773ffffffffffffffffffffffffffffffffffffffff8416838361165d565b505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f4157610f1782826116a6565b610f17838383610ea9565b6020610f58828061220f565b90501080610f715750602c610f6d828061220f565b9050115b15610fa8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610fb6606083018361220f565b610fc69161011b9160fb916128b7565b610fcf916128de565b905080826080013514610a20576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661105957637939f4245f526004601cfd5b5f60605260405250505050565b6110ca6040518060a001604052805f67ffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f8152602001606081525090565b6040805160018082528183019092525f91816020015b604080518082019091525f80825260208201528152602001906001900390816110e05790505090506040518060400160405280866080015173ffffffffffffffffffffffffffffffffffffffff16815260200184815250815f8151811061114957611149612505565b60200260200101819052506040518060a0016040528085604001602081019061117291906121f6565b67ffffffffffffffff16815260200161119160c0870160a088016121c4565b73ffffffffffffffffffffffffffffffffffffffff1681526020018560200160208101906111bf91906121c4565b73ffffffffffffffffffffffffffffffffffffffff1681525f602082015260400191909152949350505050565b5f5f84846040516111fe92919061291a565b604051809103902090505f8360405160200161121a9190612929565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018152828252805160209182012060c09a909a1b7fffffffffffffffff000000000000000000000000000000000000000000000000168184015260288301949094526048808301999099528051808303909901895260689091019052508551950194909420949350505050565b610f178383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611713565b5f73ffffffffffffffffffffffffffffffffffffffff82161561131d5761131873ffffffffffffffffffffffffffffffffffffffff83163061183a565b61131f565b475b92915050565b6060815f8167ffffffffffffffff81111561134257611342611d98565b60405190808252806020026020018201604052801561136b578160200160208202803683370190505b5090505f5f5b838110156114245786868281811061138b5761138b612505565b905060200281019061139d919061287b565b6113ae9060808101906060016121c4565b91506113b9826112db565b8382815181106113cb576113cb612505565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661141c573483828151811061140457611404612505565b60200260200101818151611418919061218c565b9052505b600101611371565b509095945050505050565b5f5b81811015610f17573683838381811061144c5761144c612505565b905060200281019061145e919061287b565b905061147060e0820160c0830161293b565b156114925761149261148860608301604084016121c4565b8260800135610992565b50600101611431565b83838383825f5b8181101561164357368a8a838181106114bd576114bd612505565b90506020028101906114cf919061287b565b90506114fe6114e460608301604084016121c4565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611560575061156061151760408301602084016121c4565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015611577575061157761151760208301836121c4565b80156115fa57506115fa61158e60a083018361220f565b61159c916004915f916128b7565b6115a591612954565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611630576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61163a8c8261186d565b506001016114a2565b5050611652848484845f611ae0565b505050505050505050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661169d576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff82166116f3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a2073ffffffffffffffffffffffffffffffffffffffff831682611cf7565b73ffffffffffffffffffffffffffffffffffffffff84161561098c5773ffffffffffffffffffffffffffffffffffffffff831661177c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156117ef573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061181391906129ba565b101561098c5761098c73ffffffffffffffffffffffffffffffffffffffff85168483611d10565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61188561187d60208301836121c4565b6017903b1190565b6118bb576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036118fa576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61190e6114e460608501604086016121c4565b611918575f61191e565b82608001355b90505f61193961193460808601606087016121c4565b6112db565b9050815f0361196f5761196f61195560608601604087016121c4565b61196560408701602088016121c4565b86608001356112af565b5f8061197e60208701876121c4565b73ffffffffffffffffffffffffffffffffffffffff16846119a260a089018961220f565b6040516119b092919061291a565b5f6040518083038185875af1925050503d805f81146119ea576040519150601f19603f3d011682016040523d82523d5f602084013e6119ef565b606091505b509150915081611a0257611a0281611d8e565b5f611a166119346080890160608a016121c4565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611a4760208a018a6121c4565b611a5760608b0160408c016121c4565b611a6760808c0160608d016121c4565b8b60800135898711611a795786611a83565b611a838a8861218c565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611aef60018261218c565b818110611afe57611afe612505565b9050602002810190611b10919061287b565b611b219060808101906060016121c4565b90505f5f5f5f5f5f5f5b88811015611ce757611b3e60018a61218c565b81108015611b4d575088600114155b15611c28578d8d82818110611b6457611b64612505565b9050602002810190611b76919061287b565b611b879060808101906060016121c4565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611c28578a8181518110611bce57611bce612505565b6020026020010151611bdf876112db565b611be9919061218c565b965073ffffffffffffffffffffffffffffffffffffffff861615611c0d575f611c0f565b895b935083871115611c2857611c28868d6105ca878b61218c565b8d8d82818110611c3a57611c3a612505565b9050602002810190611c4c919061287b565b611c5d9060608101906040016121c4565b9450611c68856112db565b925073ffffffffffffffffffffffffffffffffffffffff851615611c8c575f611c8e565b895b91508183118015611ccb57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611cdf57611cdf858d6105ca858761218c565b600101611b2b565b5050505050505050505050505050565b5f385f3884865af1610a205763b12d13eb5f526004601cfd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661169d575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661169d57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611de957611de9611d98565b60405290565b6040805190810167ffffffffffffffff81118282101715611de957611de9611d98565b60405160c0810167ffffffffffffffff81118282101715611de957611de9611d98565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611e7c57611e7c611d98565b604052919050565b5f5f67ffffffffffffffff841115611e9e57611e9e611d98565b50601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016602001611ed181611e35565b915050828152838383011115611ee5575f5ffd5b828260208301375f602084830101529392505050565b5f82601f830112611f0a575f5ffd5b611f1983833560208501611e84565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611f41575f5ffd5b50565b8035611f4f81611f20565b919050565b80358015158114611f4f575f5ffd5b5f6101408284031215611f74575f5ffd5b611f7c611dc5565b823581529050602082013567ffffffffffffffff811115611f9b575f5ffd5b611fa784828501611efb565b602083015250604082013567ffffffffffffffff811115611fc6575f5ffd5b611fd284828501611efb565b604083015250611fe460608301611f44565b6060820152611ff560808301611f44565b608082015261200660a08301611f44565b60a082015260c0828101359082015260e0808301359082015261202c6101008301611f54565b61010082015261203f6101208301611f54565b61012082015292915050565b5f60c0828403121561205b575f5ffd5b50919050565b5f5f60408385031215612072575f5ffd5b823567ffffffffffffffff811115612088575f5ffd5b61209485828601611f63565b925050602083013567ffffffffffffffff8111156120b0575f5ffd5b6120bc8582860161204b565b9150509250929050565b5f5f5f5f606085870312156120d9575f5ffd5b843567ffffffffffffffff8111156120ef575f5ffd5b6120fb87828801611f63565b945050602085013567ffffffffffffffff811115612117575f5ffd5b8501601f81018713612127575f5ffd5b803567ffffffffffffffff81111561213d575f5ffd5b8760208260051b8401011115612151575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115612174575f5ffd5b6121808782880161204b565b91505092959194509250565b8181038181111561131f577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f602082840312156121d4575f5ffd5b8135611f1981611f20565b803567ffffffffffffffff81168114611f4f575f5ffd5b5f60208284031215612206575f5ffd5b611f19826121df565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612242575f5ffd5b83018035915067ffffffffffffffff82111561225c575f5ffd5b602001915036819003821315612270575f5ffd5b9250929050565b5f67ffffffffffffffff82111561229057612290611d98565b5060051b60200190565b5f82601f8301126122a9575f5ffd5b81356122bc6122b782612277565b611e35565b8082825260208201915060208360061b8601019250858311156122dd575f5ffd5b602085015b8381101561232857604081880312156122f9575f5ffd5b612301611def565b813561230c81611f20565b81526020828101358183015290845292909201916040016122e2565b5095945050505050565b5f82601f830112612341575f5ffd5b813561234f6122b782612277565b8082825260208201915060208360051b860101925085831115612370575f5ffd5b602085015b8381101561232857803567ffffffffffffffff811115612393575f5ffd5b860160408189037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00112156123c6575f5ffd5b6123ce611def565b60208201356123dc81611f20565b8152604082013567ffffffffffffffff8111156123f7575f5ffd5b60208184010192505088601f83011261240e575f5ffd5b61241d89833560208501611e84565b60208201528085525050602083019250602081019050612375565b5f60208284031215612448575f5ffd5b813567ffffffffffffffff81111561245e575f5ffd5b820160c0818503121561246f575f5ffd5b612477611e12565b81358152612487602083016121df565b602082015261249860408301611f44565b604082015260608281013590820152608082013567ffffffffffffffff8111156124c0575f5ffd5b6124cc8682850161229a565b60808301525060a082013567ffffffffffffffff8111156124eb575f5ffd5b6124f786828501612332565b60a083015250949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f6020828403121561256f575f5ffd5b815160048110611f19575f5ffd5b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f60a0830167ffffffffffffffff835116845273ffffffffffffffffffffffffffffffffffffffff602084015116602085015273ffffffffffffffffffffffffffffffffffffffff604084015116604085015260608301516060850152608083015160a0608086015281815180845260c0870191506020830193505f92505b8083101561232857835173ffffffffffffffffffffffffffffffffffffffff81511683526020810151602084015250604082019150602084019350600183019250612643565b67ffffffffffffffff86168152608060208201525f6126ac60808301868861257d565b82810360408401526126be81866125c4565b91505082151560608301529695505050505050565b5f5f604083850312156126e4575f5ffd5b8251915060208301516126f681611f20565b809150509250929050565b602081525f61271460208301848661257d565b949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f6020830151610140604084015261278f61016084018261271c565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526127ca828261271c565b91505060608401516127f4608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161286361012085018215159052565b50610120840151801515610140850152509392505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126128ad575f5ffd5b9190910192915050565b5f5f858511156128c5575f5ffd5b838611156128d1575f5ffd5b5050820193919092039150565b8035602083101561131f577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b818382375f9101908152919050565b602081525f611f1960208301846125c4565b5f6020828403121561294b575f5ffd5b611f1982611f54565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156129b3577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f602082840312156129ca575f5ffd5b505191905056fea264697066735822122060dc155c1515cf0826abf7003e5b54fad20f908fcfd915ba12ffdab35eb9050064736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_portal";
            readonly type: "address";
            readonly internalType: "contract IEcoPortal";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "PORTAL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IEcoPortal";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaEco";
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
            readonly name: "_ecoData";
            readonly type: "tuple";
            readonly internalType: "struct EcoFacet.EcoData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "prover";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "rewardDeadline";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "encodedRoute";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "solanaATA";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaEco";
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
            readonly name: "_ecoData";
            readonly type: "tuple";
            readonly internalType: "struct EcoFacet.EcoData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "prover";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "rewardDeadline";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "encodedRoute";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "solanaATA";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
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
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
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
        readonly name: "IntentAlreadyFunded";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
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
        readonly name: "NativeAssetNotSupported";
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
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): EcoFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EcoFacet;
}
export {};
