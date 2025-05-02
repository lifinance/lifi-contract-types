import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { RelayFacet, RelayFacetInterface } from "../RelayFacet";
declare type RelayFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RelayFacet__factory extends ContractFactory {
    constructor(...args: RelayFacetConstructorParams);
    deploy(_relayReceiver: PromiseOrValue<string>, _relaySolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<RelayFacet>;
    getDeployTransaction(_relayReceiver: PromiseOrValue<string>, _relaySolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): RelayFacet;
    connect(signer: Signer): RelayFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161287d38038061287d83398101604081905261002e91610060565b6001600160a01b039182166080521660a052610091565b80516001600160a01b038116811461005b575f5ffd5b919050565b5f5f60408385031215610071575f5ffd5b61007a83610045565b915061008860208401610045565b90509250929050565b60805160a0516127b16100cc5f395f81816082015281816103f1015281816107bf0152610d7501525f818160df0152610c7001526127b15ff3fe608060405260043610610058575f3560e01c8063981886a711610041578063981886a7146100ce578063ae32859014610101578063f21a211614610114575f5ffd5b806325d374e81461005c57806381d82dd814610071575b5f5ffd5b61006f61006a366004612190565b610152565b005b34801561007c575f5ffd5b506100a47f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100d9575f5ffd5b506100a47f000000000000000000000000000000000000000000000000000000000000000081565b61006f61010f366004612256565b610626565b34801561011f575f5ffd5b5061014261012e3660046122c0565b5f6020819052908152604090205460ff1681565b60405190151581526020016100c5565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101cd576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815581355f908152602081905260409020548590839060ff161561021f576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561025e57506020810135155b15610295576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015160e08301515f916103a0918435914691309173ffffffffffffffffffffffffffffffffffffffff16906102cc90610a0a565b60a089015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f1146103215760a089015173ffffffffffffffffffffffffffffffffffffffff16610327565b87602001355b604080516020810197909752868101959095526060860193909352608085019190915260a084015260c083015284013560e082015261010001604051602081830303815290604052805190602001206020527b19457468657265756d205369676e6564204d6573736167653a0a33325f52603c60042090565b90505f6103ed826103b460608601866122d7565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250610a3f92505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610474576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f610480344761236c565b90508a8061010001516104bf576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b806101200151156104fd576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c6105208160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610557576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610594576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036105d1576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105e58e5f01518f60c001518f8f33610ae3565b60c08f01526105f48e8c610c26565b504791505081811115610615576106155f84610610858561236c565b610ffa565b50505f909555505050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016106a1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556106ae8361237f565b82355f90815260208190526040902054839060ff16156106fa576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561073957506020810135155b15610770576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015160e08301515f916107a7918435914691309173ffffffffffffffffffffffffffffffffffffffff16906102cc90610a0a565b90505f6107bb826103b460608601866122d7565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610842576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f61084e344761236c565b90506108598961237f565b60a081015173ffffffffffffffffffffffffffffffffffffffff166108aa576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036108e7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610924576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61092d8a61237f565b8061010001511561096a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109738b61237f565b806101200151156109b0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109cd6109c360a08e0160808f0161238a565b8d60c0013561102f565b6109df6109d98d61237f565b8c610c26565b5047915050818111156109fb576109fb5f84610610858561236c565b50505f90955550505050505050565b5f816512309ce5400103610a225750627dee6e919050565b81660416edef1601be03610a3b5750632f3fb341919050565b5090565b604051600190835f5260208301516040526040835103610a9357604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052610ab7565b6041835103610ab35760608301515f1a6020526040830151606052610ab7565b5f91505b6020600160805f855afa5191503d610ad657638baa579f5f526004601cfd5b5f60605260405292915050565b5f82808203610b1e576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610b2c60018561236c565b818110610b3b57610b3b6123a3565b9050602002810190610b4d91906123d0565b610b5e90608081019060600161238a565b90505f610b6a826110e3565b905073ffffffffffffffffffffffffffffffffffffffff8216610b9457610b91348261236c565b90505b5f610b9f888861112d565b9050610bab8888611237565b610bb88a898989856112a3565b5f82610bc3856110e3565b610bcd919061236c565b905089811015610c18576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610d565760c082015160408051833560208201525f92839273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610cca91612423565b5f6040518083038185875af1925050503d805f8114610d04576040519150601f19603f3d011682016040523d82523d5f602084013e610d09565b606091505b509150915081610d4f57610d1c8161164e565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0f919061247a565b5050610efe565b60c082015160405173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016602482015260448101919091525f90606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529051610e31918535910190815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610e6d929160200161248c565b60405160208183030381529060405290505f5f846080015173ffffffffffffffffffffffffffffffffffffffff1683604051610ea99190612423565b5f604051808303815f865af19150503d805f8114610ee2576040519150601f19603f3d011682016040523d82523d5f602084013e610ee7565b606091505b509150915081610efa57610d1c8161164e565b5050505b80355f908152602081905260409020805460017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911617905560a082015173ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffee0eee0eee0eee0eee0eee0eee0eee0eee0eee0f01610fbf57610f868260e00151610a0a565b825160405160208481013582527f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c910160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610fee91906124a8565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166110245761101f82826116cb565b505050565b61101f838383611738565b805f03611068576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110c157803410156110bd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6110bd73ffffffffffffffffffffffffffffffffffffffff83163330846117a6565b5f73ffffffffffffffffffffffffffffffffffffffff8216156111255761112073ffffffffffffffffffffffffffffffffffffffff8316306117fe565b611127565b475b92915050565b6060815f8167ffffffffffffffff81111561114a5761114a611f1e565b604051908082528060200260200182016040528015611173578160200160208202803683370190505b5090505f805b8381101561122c57868682818110611193576111936123a3565b90506020028101906111a591906123d0565b6111b690608081019060600161238a565b91506111c1826110e3565b8382815181106111d3576111d36123a3565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611224573483828151811061120c5761120c6123a3565b60200260200101818151611220919061236c565b9052505b600101611179565b509095945050505050565b5f5b8181101561101f5736838383818110611254576112546123a3565b905060200281019061126691906123d0565b905061127860e0820160c083016125bb565b1561129a5761129a611290606083016040840161238a565b826080013561102f565b50600101611239565b83838383826001811461156a575f85856112be60018561236c565b8181106112cd576112cd6123a3565b90506020028101906112df91906123d0565b6112f090608081019060600161238a565b90505f89815b8181101561149757368d8d83818110611311576113116123a3565b905060200281019061132391906123d0565b9050611352611338606083016040840161238a565b73ffffffffffffffffffffffffffffffffffffffff161590565b806113b457506113b461136b604083016020840161238a565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156113cb57506113cb61136b602083018361238a565b801561144e575061144e6113e260a08301836122d7565b6113f0916004915f916125d4565b6113f9916125fb565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611484576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61148e8f82611831565b506001016112f6565b505f90505b6114a760018561236c565b811015611562575f8888838181106114c1576114c16123a3565b90506020028101906114d391906123d0565b6114e490608081019060600161238a565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146115595785828151811061152b5761152b6123a3565b602002602001015161153c826110e3565b611546919061236c565b9250821561155957611559818885610ffa565b5060010161149c565b505050611642565b875f5b8181101561163f57368b8b83818110611588576115886123a3565b905060200281019061159a91906123d0565b90506115af611338606083016040840161238a565b806115c857506115c861136b604083016020840161238a565b80156115df57506115df61136b602083018361238a565b80156115f657506115f66113e260a08301836122d7565b61162c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116368d82611831565b5060010161156d565b50505b50505050505050505050565b606060448251101561169357505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b5f6116ae60048085516116a6919061236c565b859190611b03565b9050808060200190518101906116c49190612661565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8216611718576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110bd73ffffffffffffffffffffffffffffffffffffffff831682611c1c565b73ffffffffffffffffffffffffffffffffffffffff8216611785576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61101f73ffffffffffffffffffffffffffffffffffffffff84168383611c35565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166117f157637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b611846611841602083018361238a565b611c7e565b61187c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036118bb576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6118cf611338606085016040860161238a565b6118d9575f6118df565b82608001355b90505f6118fa6118f5606086016040870161238a565b6110e3565b90505f6119106118f5608087016060880161238a565b9050825f036119465761194661192c606087016040880161238a565b61193c604088016020890161238a565b8760800135611d59565b8460800135821015611991576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610c0f565b5f806119a0602088018861238a565b73ffffffffffffffffffffffffffffffffffffffff16856119c460a08a018a6122d7565b6040516119d29291906126d6565b5f6040518083038185875af1925050503d805f8114611a0c576040519150601f19603f3d011682016040523d82523d5f602084013e611a11565b606091505b509150915081611a2457611a2481611d85565b5f611a386118f560808a0160608b0161238a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a6960208b018b61238a565b611a7960608c0160408d0161238a565b611a8960808d0160608e0161238a565b8c60800135898711611a9b5786611aa5565b611aa58a8861236c565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b606081611b1181601f6126e5565b1015611b49576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611b5382846126e5565b84511015611b8d576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611bab5760405191505f825260208201604052611c13565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611be4578051835260209283019201611bcc565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b5f385f3884865af16110bd5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c75576390b8ec185f526004601cfd5b5f603452505050565b6040805160038082528183019092525f91829182917fef0100000000000000000000000000000000000000000000000000000000000091839160208201818036833701905050863b945090507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060035f60208401893c863f93505f611d02836126f8565b90507fffffff000000000000000000000000000000000000000000000000000000000080851690821603611d3e57506001979650505050505050565b5f86118015611d4d5750818514155b98975050505050505050565b61101f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611d8f565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8316611ddc576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611e4f573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e739190612764565b1015611e9a57611e9a73ffffffffffffffffffffffffffffffffffffffff85168483611ea0565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c75575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611c7557633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611f6f57611f6f611f1e565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611fbc57611fbc611f1e565b604052919050565b5f67ffffffffffffffff821115611fdd57611fdd611f1e565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f830112612018575f5ffd5b813561202b61202682611fc4565b611f75565b81815284602083860101111561203f575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461207e575f5ffd5b919050565b8035801515811461207e575f5ffd5b5f61014082840312156120a3575f5ffd5b6120ab611f4b565b823581529050602082013567ffffffffffffffff8111156120ca575f5ffd5b6120d684828501612009565b602083015250604082013567ffffffffffffffff8111156120f5575f5ffd5b61210184828501612009565b6040830152506121136060830161205b565b60608201526121246080830161205b565b608082015261213560a0830161205b565b60a082015260c0828101359082015260e0808301359082015261215b6101008301612083565b61010082015261216e6101208301612083565b61012082015292915050565b5f6080828403121561218a575f5ffd5b50919050565b5f5f5f5f606085870312156121a3575f5ffd5b843567ffffffffffffffff8111156121b9575f5ffd5b6121c587828801612092565b945050602085013567ffffffffffffffff8111156121e1575f5ffd5b8501601f810187136121f1575f5ffd5b803567ffffffffffffffff811115612207575f5ffd5b8760208260051b840101111561221b575f5ffd5b60209190910193509150604085013567ffffffffffffffff81111561223e575f5ffd5b61224a8782880161217a565b91505092959194509250565b5f5f60408385031215612267575f5ffd5b823567ffffffffffffffff81111561227d575f5ffd5b8301610140818603121561228f575f5ffd5b9150602083013567ffffffffffffffff8111156122aa575f5ffd5b6122b68582860161217a565b9150509250929050565b5f602082840312156122d0575f5ffd5b5035919050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261230a575f5ffd5b83018035915067ffffffffffffffff821115612324575f5ffd5b602001915036819003821315612338575f5ffd5b9250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156111275761112761233f565b5f6111273683612092565b5f6020828403121561239a575f5ffd5b6116c48261205b565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612402575f5ffd5b9190910192915050565b5f81518060208401855e5f93019283525090919050565b5f6116c4828461240c565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081525f6116c4602083018461242e565b5f6124a061249a838661240c565b8461240c565b949350505050565b60208152815160208201525f602083015161014060408401526124cf61016084018261242e565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261250a828261242e565b9150506060840151612534608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516125a361012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156125cb575f5ffd5b6116c482612083565b5f5f858511156125e2575f5ffd5b838611156125ee575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561265a577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612671575f5ffd5b815167ffffffffffffffff811115612687575f5ffd5b8201601f81018413612697575f5ffd5b80516126a561202682611fc4565b8181528560208385010111156126b9575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b818382375f9101908152919050565b808201808211156111275761112761233f565b805160208201517fffffff000000000000000000000000000000000000000000000000000000000081169190600382101561275d577fffffff0000000000000000000000000000000000000000000000000000000000808360030360031b1b82161692505b5050919050565b5f60208284031215612774575f5ffd5b505191905056fea2646970667358221220de431a9bffa37938ce15954c37b249671350631423fa0da9437280b3d89015f664736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_relayReceiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_relaySolver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "consumedIds";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "relayReceiver";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "relaySolver";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaRelay";
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
            readonly name: "_relayData";
            readonly type: "tuple";
            readonly internalType: "struct RelayFacet.RelayData";
            readonly components: readonly [{
                readonly name: "requestId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaRelay";
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
            readonly name: "_relayData";
            readonly type: "tuple";
            readonly internalType: "struct RelayFacet.RelayData";
            readonly components: readonly [{
                readonly name: "requestId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
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
        readonly name: "InvalidQuote";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
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
    }, {
        readonly type: "error";
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): RelayFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RelayFacet;
}
export {};
