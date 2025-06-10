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
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161277338038061277383398101604081905261002e91610060565b6001600160a01b039182166080521660a052610091565b80516001600160a01b038116811461005b575f5ffd5b919050565b5f5f60408385031215610071575f5ffd5b61007a83610045565b915061008860208401610045565b90509250929050565b60805160a0516126a76100cc5f395f81816082015281816103f1015281816107bf0152610d7501525f818160df0152610c7001526126a75ff3fe608060405260043610610058575f3560e01c8063981886a711610041578063981886a7146100ce578063ae32859014610101578063f21a211614610114575f5ffd5b806325d374e81461005c57806381d82dd814610071575b5f5ffd5b61006f61006a3660046120f2565b610152565b005b34801561007c575f5ffd5b506100a47f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100d9575f5ffd5b506100a47f000000000000000000000000000000000000000000000000000000000000000081565b61006f61010f3660046121b8565b610626565b34801561011f575f5ffd5b5061014261012e366004612222565b5f6020819052908152604090205460ff1681565b60405190151581526020016100c5565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101cd576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815581355f908152602081905260409020548590839060ff161561021f576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561025e57506020810135155b15610295576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015160e08301515f916103a0918435914691309173ffffffffffffffffffffffffffffffffffffffff16906102cc90610a0a565b60a089015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f1146103215760a089015173ffffffffffffffffffffffffffffffffffffffff16610327565b87602001355b604080516020810197909752868101959095526060860193909352608085019190915260a084015260c083015284013560e082015261010001604051602081830303815290604052805190602001206020527b19457468657265756d205369676e6564204d6573736167653a0a33325f52603c60042090565b90505f6103ed826103b46060860186612239565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250610a3f92505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610474576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f61048034476122ce565b90508a8061010001516104bf576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b806101200151156104fd576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c6105208160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610557576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610594576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036105d1576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105e58e5f01518f60c001518f8f33610ae3565b60c08f01526105f48e8c610c26565b504791505081811115610615576106155f8461061085856122ce565b610ffa565b50505f909555505050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016106a1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556106ae836122e1565b82355f90815260208190526040902054839060ff16156106fa576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561073957506020810135155b15610770576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015160e08301515f916107a7918435914691309173ffffffffffffffffffffffffffffffffffffffff16906102cc90610a0a565b90505f6107bb826103b46060860186612239565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610842576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f61084e34476122ce565b9050610859896122e1565b60a081015173ffffffffffffffffffffffffffffffffffffffff166108aa576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036108e7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610924576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61092d8a6122e1565b8061010001511561096a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109738b6122e1565b806101200151156109b0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109cd6109c360a08e0160808f016122ec565b8d60c0013561102f565b6109df6109d98d6122e1565b8c610c26565b5047915050818111156109fb576109fb5f8461061085856122ce565b50505f90955550505050505050565b5f816512309ce5400103610a225750627dee6e919050565b81660416edef1601be03610a3b5750632f3fb341919050565b5090565b604051600190835f5260208301516040526040835103610a9357604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052610ab7565b6041835103610ab35760608301515f1a6020526040830151606052610ab7565b5f91505b6020600160805f855afa5191503d610ad657638baa579f5f526004601cfd5b5f60605260405292915050565b5f82808203610b1e576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610b2c6001856122ce565b818110610b3b57610b3b612305565b9050602002810190610b4d9190612332565b610b5e9060808101906060016122ec565b90505f610b6a826110e3565b905073ffffffffffffffffffffffffffffffffffffffff8216610b9457610b9134826122ce565b90505b5f610b9f888861112d565b9050610bab8888611237565b610bb88a898989856112a3565b5f82610bc3856110e3565b610bcd91906122ce565b905089811015610c18576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610d565760c082015160408051833560208201525f92839273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610cca91612385565b5f6040518083038185875af1925050503d805f8114610d04576040519150601f19603f3d011682016040523d82523d5f602084013e610d09565b606091505b509150915081610d4f57610d1c816115db565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0f91906123dc565b5050610efe565b60c082015160405173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016602482015260448101919091525f90606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529051610e31918535910190815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610e6d92916020016123ee565b60405160208183030381529060405290505f5f846080015173ffffffffffffffffffffffffffffffffffffffff1683604051610ea99190612385565b5f604051808303815f865af19150503d805f8114610ee2576040519150601f19603f3d011682016040523d82523d5f602084013e610ee7565b606091505b509150915081610efa57610d1c816115db565b5050505b80355f908152602081905260409020805460017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911617905560a082015173ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffee0eee0eee0eee0eee0eee0eee0eee0eee0eee0f01610fbf57610f868260e00151610a0a565b825160405160208481013582527f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c910160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610fee919061240a565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166110245761101f8282611658565b505050565b61101f8383836116c5565b805f03611068576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110c157803410156110bd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6110bd73ffffffffffffffffffffffffffffffffffffffff8316333084611733565b5f73ffffffffffffffffffffffffffffffffffffffff8216156111255761112073ffffffffffffffffffffffffffffffffffffffff83163061178b565b611127565b475b92915050565b6060815f8167ffffffffffffffff81111561114a5761114a611e80565b604051908082528060200260200182016040528015611173578160200160208202803683370190505b5090505f805b8381101561122c5786868281811061119357611193612305565b90506020028101906111a59190612332565b6111b69060808101906060016122ec565b91506111c1826110e3565b8382815181106111d3576111d3612305565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611224573483828151811061120c5761120c612305565b6020026020010181815161122091906122ce565b9052505b600101611179565b509095945050505050565b5f5b8181101561101f573683838381811061125457611254612305565b90506020028101906112669190612332565b905061127860e0820160c0830161251d565b1561129a5761129a61129060608301604084016122ec565b826080013561102f565b50600101611239565b8383838382805f5b8181101561144c57368b8b838181106112c6576112c6612305565b90506020028101906112d89190612332565b90506113076112ed60608301604084016122ec565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611369575061136961132060408301602084016122ec565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015611380575061138061132060208301836122ec565b8015611403575061140361139760a0830183612239565b6113a5916004915f91612536565b6113ae9161255d565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611439576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114438d826117be565b506001016112ab565b505080600114611565575f85856114646001856122ce565b81811061147357611473612305565b90506020028101906114859190612332565b6114969060808101906060016122ec565b90505f805b6114a66001856122ce565b811015611561575f8888838181106114c0576114c0612305565b90506020028101906114d29190612332565b6114e39060808101906060016122ec565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146115585785828151811061152a5761152a612305565b602002602001015161153b826110e3565b61154591906122ce565b9250821561155857611558818885610ffa565b5060010161149b565b5050505b5f5b818110156115ce575f86868381811061158257611582612305565b90506020028101906115949190612332565b6115a59060608101906040016122ec565b90505f6115b1826110e3565b905080156115c4576115c4828783610ffa565b5050600101611567565b5050505050505050505050565b606060448251101561162057505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b5f61163b600480855161163391906122ce565b859190611a90565b90508080602001905181019061165191906125c3565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff82166116a5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110bd73ffffffffffffffffffffffffffffffffffffffff831682611ba9565b73ffffffffffffffffffffffffffffffffffffffff8216611712576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61101f73ffffffffffffffffffffffffffffffffffffffff84168383611bc2565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661177e57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6117d36117ce60208301836122ec565b611c0b565b611809576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611848576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61185c6112ed60608501604086016122ec565b611866575f61186c565b82608001355b90505f61188761188260608601604087016122ec565b6110e3565b90505f61189d61188260808701606088016122ec565b9050825f036118d3576118d36118b960608701604088016122ec565b6118c960408801602089016122ec565b8760800135611c9f565b846080013582101561191e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610c0f565b5f8061192d60208801886122ec565b73ffffffffffffffffffffffffffffffffffffffff168561195160a08a018a612239565b60405161195f929190612638565b5f6040518083038185875af1925050503d805f8114611999576040519150601f19603f3d011682016040523d82523d5f602084013e61199e565b606091505b5091509150816119b1576119b181611ccb565b5f6119c561188260808a0160608b016122ec565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896119f660208b018b6122ec565b611a0660608c0160408d016122ec565b611a1660808d0160608e016122ec565b8c60800135898711611a285786611a32565b611a328a886122ce565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b606081611a9e81601f612647565b1015611ad6576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611ae08284612647565b84511015611b1a576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611b385760405191505f825260208201604052611ba0565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611b71578051835260209283019201611b59565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b5f385f3884865af16110bd5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c02576390b8ec185f526004601cfd5b5f603452505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000821601611c9657506023015160601c3b151592915050565b5050503b151590565b61101f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611cd5565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615611dfc5773ffffffffffffffffffffffffffffffffffffffff8316611d3e576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611db1573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611dd5919061265a565b1015611dfc57611dfc73ffffffffffffffffffffffffffffffffffffffff85168483611e02565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c02575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611c0257633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611ed157611ed1611e80565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611f1e57611f1e611e80565b604052919050565b5f67ffffffffffffffff821115611f3f57611f3f611e80565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f830112611f7a575f5ffd5b8135611f8d611f8882611f26565b611ed7565b818152846020838601011115611fa1575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611fe0575f5ffd5b919050565b80358015158114611fe0575f5ffd5b5f6101408284031215612005575f5ffd5b61200d611ead565b823581529050602082013567ffffffffffffffff81111561202c575f5ffd5b61203884828501611f6b565b602083015250604082013567ffffffffffffffff811115612057575f5ffd5b61206384828501611f6b565b60408301525061207560608301611fbd565b606082015261208660808301611fbd565b608082015261209760a08301611fbd565b60a082015260c0828101359082015260e080830135908201526120bd6101008301611fe5565b6101008201526120d06101208301611fe5565b61012082015292915050565b5f608082840312156120ec575f5ffd5b50919050565b5f5f5f5f60608587031215612105575f5ffd5b843567ffffffffffffffff81111561211b575f5ffd5b61212787828801611ff4565b945050602085013567ffffffffffffffff811115612143575f5ffd5b8501601f81018713612153575f5ffd5b803567ffffffffffffffff811115612169575f5ffd5b8760208260051b840101111561217d575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156121a0575f5ffd5b6121ac878288016120dc565b91505092959194509250565b5f5f604083850312156121c9575f5ffd5b823567ffffffffffffffff8111156121df575f5ffd5b830161014081860312156121f1575f5ffd5b9150602083013567ffffffffffffffff81111561220c575f5ffd5b612218858286016120dc565b9150509250929050565b5f60208284031215612232575f5ffd5b5035919050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261226c575f5ffd5b83018035915067ffffffffffffffff821115612286575f5ffd5b60200191503681900382131561229a575f5ffd5b9250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115611127576111276122a1565b5f6111273683611ff4565b5f602082840312156122fc575f5ffd5b61165182611fbd565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612364575f5ffd5b9190910192915050565b5f81518060208401855e5f93019283525090919050565b5f611651828461236e565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081525f6116516020830184612390565b5f6124026123fc838661236e565b8461236e565b949350505050565b60208152815160208201525f60208301516101406040840152612431610160840182612390565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261246c8282612390565b9150506060840151612496608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161250561012085018215159052565b50610120840151801515610140850152509392505050565b5f6020828403121561252d575f5ffd5b61165182611fe5565b5f5f85851115612544575f5ffd5b83861115612550575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156125bc577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f602082840312156125d3575f5ffd5b815167ffffffffffffffff8111156125e9575f5ffd5b8201601f810184136125f9575f5ffd5b8051612607611f8882611f26565b81815285602083850101111561261b575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b818382375f9101908152919050565b80820180821115611127576111276122a1565b5f6020828403121561266a575f5ffd5b505191905056fea26469706673582212208d8484bc556a4c1445dd988dd23abc686013a2eb365302f4417e6e6f84ec492564736f6c634300081d0033";
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
