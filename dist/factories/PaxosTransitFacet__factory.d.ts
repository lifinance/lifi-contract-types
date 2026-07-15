import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PaxosTransitFacet, PaxosTransitFacetInterface } from "../PaxosTransitFacet";
type PaxosTransitFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PaxosTransitFacet__factory extends ContractFactory {
    constructor(...args: PaxosTransitFacetConstructorParams);
    deploy(_transitStation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PaxosTransitFacet>;
    getDeployTransaction(_transitStation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PaxosTransitFacet;
    connect(signer: Signer): PaxosTransitFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161238638038061238683398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516122ce6100b85f395f818160c101528181610a5a0152610a9a01526122ce5ff3fe60806040526004361061003e575f3560e01c80630ad0587c146100425780635080ffe214610088578063637f1d041461009d578063c3c7a5be146100b0575b5f5ffd5b34801561004d575f5ffd5b506100757f4c4946490000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b61009b610096366004611ca1565b610108565b005b61009b6100ab366004611d06565b610479565b3480156100bb575f5ffd5b506100e37f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161007f565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610183576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556101996101c083016101a08401611dcc565b5f6101a43447611dec565b9050846101c98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610200576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361023d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361027a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156102b8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156102f6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87610319816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610350576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6103636101c08a016101a08b01611dcc565b73ffffffffffffffffffffffffffffffffffffffff16036103b0576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08901516060890135146103f1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b348861018001351115610430576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61044289608001518a60c001516108a7565b61044c898961095b565b5047925050508181111561046e5761046e5f846104698585611dec565b610b70565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104f4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561050a6101c083016101a08401611dcc565b5f6105153447611dec565b905086806101000151610554576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610592576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886105b58160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156105ec576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610629576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610666576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b89610689816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156106c0576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6106d36101c08a016101a08b01611dcc565b73ffffffffffffffffffffffffffffffffffffffff1603610720576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08b01516060890135908114610763576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b89158015906107e0575060808c015173ffffffffffffffffffffffffffffffffffffffff168b8b610795600182611dec565b8181106107a4576107a4611e24565b90506020028101906107b69190611e51565b6107c7906080810190606001611dcc565b73ffffffffffffffffffffffffffffffffffffffff1614155b15610817576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6108418d5f0151838e8e8e6101a00160208101906108369190611dcc565b8f6101800135610ba5565b9050818111156108705760808d0151610870906108666101c08d016101a08e01611dcc565b6104698585611dec565b61087a8d8b61095b565b5047945050505082821115905061089a5761089a5f846104698585611dec565b50505f9091555050505050565b805f036108e0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109395780341015610935576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61093573ffffffffffffffffffffffffffffffffffffffff8316333084610d3f565b8061096c6040820160208301611dcc565b73ffffffffffffffffffffffffffffffffffffffff16836080015173ffffffffffffffffffffffffffffffffffffffff161415806109e957506109b560a0820160808301611dcc565b73ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614155b80610a1957506101008101357f4c4946490000000000000000000000000000000000000000000000000000000014155b15610a50576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a8383608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151610d97565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016633784896a61018084013583610ad4610160870187611e8d565b6040518563ffffffff1660e01b8152600401610af293929190611f3c565b60206040518083038185885af1158015610b0e573d5f5f3e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190610b339190612050565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610b6391906120b3565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b9a57610b958282610dc3565b505050565b610b95838383610e30565b5f83808203610be0576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610bee600185611dec565b818110610bfd57610bfd611e24565b9050602002810190610c0f9190611e51565b610c20906080810190606001611dcc565b90505f610c2c82610f7b565b905073ffffffffffffffffffffffffffffffffffffffff8216610c5657610c533482611dec565b90505b5f610c618989610fc5565b9050610c6d89896110cf565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610ca8818b8b8561113b565b5f83610cb386610f7b565b610cbd9190611dec565b905073ffffffffffffffffffffffffffffffffffffffff8516610ce757610ce48882611dec565b90505b8b811015610d2f576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610d8a57637939f4245f526004601cfd5b5f60605260405250505050565b610b958383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611391565b73ffffffffffffffffffffffffffffffffffffffff8216610e10576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61093573ffffffffffffffffffffffffffffffffffffffff8316826114b8565b73ffffffffffffffffffffffffffffffffffffffff8216610e7d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc46148015610eb9575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b15610f5a576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af1158015610f30573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f5491906121c6565b50505050565b610b9573ffffffffffffffffffffffffffffffffffffffff841683836114d1565b5f73ffffffffffffffffffffffffffffffffffffffff821615610fbd57610fb873ffffffffffffffffffffffffffffffffffffffff83163061151a565b610fbf565b475b92915050565b6060815f8167ffffffffffffffff811115610fe257610fe2611a5f565b60405190808252806020026020018201604052801561100b578160200160208202803683370190505b5090505f5f5b838110156110c45786868281811061102b5761102b611e24565b905060200281019061103d9190611e51565b61104e906080810190606001611dcc565b915061105982610f7b565b83828151811061106b5761106b611e24565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110bc57348382815181106110a4576110a4611e24565b602002602001018181516110b89190611dec565b9052505b600101611011565b509095945050505050565b5f5b81811015610b9557368383838181106110ec576110ec611e24565b90506020028101906110fe9190611e51565b905061111060e0820160c083016121e1565b15611132576111326111286060830160408401611dcc565b82608001356108a7565b506001016110d1565b60208401516040850151849184918490835f80805b8381101561137557368c8c8381811061116b5761116b611e24565b905060200281019061117d9190611e51565b905061118c6020820182611dcc565b935061119e6040820160208301611dcc565b9250611241846111b160a0840184611e8d565b6111bf916004915f916121fc565b6111c891612223565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580611329575061127561125b6060830160408401611dcc565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156112ae57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611329575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15611360576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d5161136c908261154d565b50600101611150565b5050505061138685858585856117c0565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615610f545773ffffffffffffffffffffffffffffffffffffffff83166113fa576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561146d573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114919190612050565b1015610f5457610f5473ffffffffffffffffffffffffffffffffffffffff851684836119d7565b5f385f3884865af16109355763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611511576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61156561155d6020830183611dcc565b6017903b1190565b61159b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036115da576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6115ee61125b6060850160408601611dcc565b6115f8575f6115fe565b82608001355b90505f6116196116146080860160608701611dcc565b610f7b565b9050815f0361164f5761164f6116356060860160408701611dcc565b6116456040870160208801611dcc565b8660800135610d97565b5f8061165e6020870187611dcc565b73ffffffffffffffffffffffffffffffffffffffff168461168260a0890189611e8d565b604051611690929190612289565b5f6040518083038185875af1925050503d805f81146116ca576040519150601f19603f3d011682016040523d82523d5f602084013e6116cf565b606091505b5091509150816116e2576116e281611a55565b5f6116f66116146080890160608a01611dcc565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861172760208a018a611dcc565b61173760608b0160408c01611dcc565b61174760808c0160608d01611dcc565b8b608001358987116117595786611763565b6117638a88611dec565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826117cf600182611dec565b8181106117de576117de611e24565b90506020028101906117f09190611e51565b611801906080810190606001611dcc565b90505f5f5f5f5f5f5f5b888110156119c75761181e60018a611dec565b8110801561182d575088600114155b15611908578d8d8281811061184457611844611e24565b90506020028101906118569190611e51565b611867906080810190606001611dcc565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611908578a81815181106118ae576118ae611e24565b60200260200101516118bf87610f7b565b6118c99190611dec565b965073ffffffffffffffffffffffffffffffffffffffff8616156118ed575f6118ef565b895b93508387111561190857611908868d610469878b611dec565b8d8d8281811061191a5761191a611e24565b905060200281019061192c9190611e51565b61193d906060810190604001611dcc565b945061194885610f7b565b925073ffffffffffffffffffffffffffffffffffffffff85161561196c575f61196e565b895b915081831180156119ab57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156119bf576119bf858d6104698587611dec565b60010161180b565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611511575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661151157633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611ab057611ab0611a5f565b60405290565b5f82601f830112611ac5575f5ffd5b813567ffffffffffffffff811115611adf57611adf611a5f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611b2c57611b2c611a5f565b604052818152838201602001851015611b43575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611b82575f5ffd5b919050565b8015158114611b94575f5ffd5b50565b8035611b8281611b87565b5f6101408284031215611bb3575f5ffd5b611bbb611a8c565b823581529050602082013567ffffffffffffffff811115611bda575f5ffd5b611be684828501611ab6565b602083015250604082013567ffffffffffffffff811115611c05575f5ffd5b611c1184828501611ab6565b604083015250611c2360608301611b5f565b6060820152611c3460808301611b5f565b6080820152611c4560a08301611b5f565b60a082015260c0828101359082015260e08083013590820152611c6b6101008301611b97565b610100820152611c7e6101208301611b97565b61012082015292915050565b5f6101c08284031215611c9b575f5ffd5b50919050565b5f5f60408385031215611cb2575f5ffd5b823567ffffffffffffffff811115611cc8575f5ffd5b611cd485828601611ba2565b925050602083013567ffffffffffffffff811115611cf0575f5ffd5b611cfc85828601611c8a565b9150509250929050565b5f5f5f5f60608587031215611d19575f5ffd5b843567ffffffffffffffff811115611d2f575f5ffd5b611d3b87828801611ba2565b945050602085013567ffffffffffffffff811115611d57575f5ffd5b8501601f81018713611d67575f5ffd5b803567ffffffffffffffff811115611d7d575f5ffd5b8760208260051b8401011115611d91575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611db4575f5ffd5b611dc087828801611c8a565b91505092959194509250565b5f60208284031215611ddc575f5ffd5b611de582611b5f565b9392505050565b81810381811115610fbf577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611e83575f5ffd5b9190910192915050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ec0575f5ffd5b83018035915067ffffffffffffffff821115611eda575f5ffd5b602001915036819003821315611eee575f5ffd5b9250929050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f843563ffffffff8116808214611f51575f5ffd5b83525073ffffffffffffffffffffffffffffffffffffffff611f7560208701611b5f565b16602083015273ffffffffffffffffffffffffffffffffffffffff611f9c60408701611b5f565b16604083015260608581013590830152611fb860808601611b5f565b73ffffffffffffffffffffffffffffffffffffffff16608083015260a0858101359083015260c08086013590830152611ff360e08601611b5f565b73ffffffffffffffffffffffffffffffffffffffff1660e083015261010085810135908301526101208086013590830152610140808601359083015261018061016083018190526120479083018486611ef5565b95945050505050565b5f60208284031215612060575f5ffd5b5051919050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526120da610160840182612067565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526121158282612067565b915050606084015161213f608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516121ae61012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156121d6575f5ffd5b8151611de581611b87565b5f602082840312156121f1575f5ffd5b8135611de581611b87565b5f5f8585111561220a575f5ffd5b83861115612216575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612282577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f910190815291905056fea264697066735822122083c05af057463110fd73a707c264bed3f0f5e80697b777362ed1a8bf5ce66cf164736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_transitStation";
            readonly type: "address";
            readonly internalType: "contract IPaxosTransit";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "LIFI_DISTRIBUTOR_CODE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "TRANSIT_STATION";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IPaxosTransit";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaPaxosTransit";
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
            readonly name: "_paxosData";
            readonly type: "tuple";
            readonly internalType: "struct PaxosTransitFacet.PaxosTransitData";
            readonly components: readonly [{
                readonly name: "quote";
                readonly type: "tuple";
                readonly internalType: "struct IPaxosTransit.Quote";
                readonly components: readonly [{
                    readonly name: "route";
                    readonly type: "tuple";
                    readonly internalType: "struct IPaxosTransit.Route";
                    readonly components: readonly [{
                        readonly name: "destEID";
                        readonly type: "uint32";
                        readonly internalType: "uint32";
                    }, {
                        readonly name: "offerAsset";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "wantAsset";
                        readonly type: "address";
                        readonly internalType: "address";
                    }];
                }, {
                    readonly name: "offerAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "protocolFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "integratorFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "integratorFeeReceiver";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "distributorCode";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "salt";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaPaxosTransit";
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
            readonly name: "_paxosData";
            readonly type: "tuple";
            readonly internalType: "struct PaxosTransitFacet.PaxosTransitData";
            readonly components: readonly [{
                readonly name: "quote";
                readonly type: "tuple";
                readonly internalType: "struct IPaxosTransit.Quote";
                readonly components: readonly [{
                    readonly name: "route";
                    readonly type: "tuple";
                    readonly internalType: "struct IPaxosTransit.Route";
                    readonly components: readonly [{
                        readonly name: "destEID";
                        readonly type: "uint32";
                        readonly internalType: "uint32";
                    }, {
                        readonly name: "offerAsset";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "wantAsset";
                        readonly type: "address";
                        readonly internalType: "address";
                    }];
                }, {
                    readonly name: "offerAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "protocolFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "integratorFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "integratorFeeReceiver";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "distributorCode";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "salt";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
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
    static createInterface(): PaxosTransitFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PaxosTransitFacet;
}
export {};
