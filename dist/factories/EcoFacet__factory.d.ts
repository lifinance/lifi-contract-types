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
    static readonly bytecode = "0x60e0604052632b6653dc60a05263536f6c4d60c05234801561001f575f5ffd5b5060405161293238038061293283398101604081905261003e91610076565b6001600160a01b038116610065576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b03166080526100a3565b5f60208284031215610086575f5ffd5b81516001600160a01b038116811461009c575f5ffd5b9392505050565b60805160a05160c0516128586100da5f395f610b1201525f610ad901525f8181604801528181610b920152610bb901526128585ff3fe608060405260043610610033575f3560e01c80630ff754ea1461003757806320560477146100935780639ab12459146100a8575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a66100a1366004611eff565b6100bb565b005b6100a66100b6366004611fc5565b61034d565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447612057565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101a88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101df576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361021c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610259576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8880610120015115610297576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102a18a886105aa565b5f6102c48b6080015173ffffffffffffffffffffffffffffffffffffffff161590565b90505f816102d2575f6102d8565b88608001355b90506102ef8c5f01518d60c001518d8d33866108dc565b60c08d0152816103135788608001358c60c0015161030d9190612057565b60c08d01525b61031d8c8a610a78565b5047935050505081811115610340576103405f8461033b8585612057565b610d14565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103c8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103d83447612057565b9050846103fd8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610434576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610471576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104ae576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156104ec576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561052a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61053488886105aa565b60c0880151608089015173ffffffffffffffffffffffffffffffffffffffff161561056a5761056760808901358261206a565b90505b610578896080015182610d49565b6105828989610a78565b5047925050508181111561059f5761059f5f8461033b8585612057565b50505f909155505050565b60a082015160e0830151660416edef1601be147fffffffffffffffffffffffffee0eee0eee0eee0eee0eee0eee0eee0eee0eee0f73ffffffffffffffffffffffffffffffffffffffff83160161072057610607602084018461207d565b90505f03610641576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156106d95760c0830135610682576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61068f60a084018461207d565b905061013f146106cb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106d483610dfd565b6108d6565b6106e660a084018461207d565b90505f036106d4576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61072d60208401846120e5565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610791576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61079e60a084018461207d565b90505f036107d8576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8015610810576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61081e60a085018561207d565b81019061082b91906122d8565b60a081015180519192505f9161084390600190612057565b81518110610853576108536123a5565b60200260200101516020015190505f602482015190508660a0015173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146108d2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505b50505050565b5f83808203610917576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610925600185612057565b818110610934576109346123a5565b905060200281019061094691906123d2565b6109579060808101906060016120e5565b90505f61096382610ec3565b905073ffffffffffffffffffffffffffffffffffffffff821661098d5761098a3482612057565b90505b5f6109988989610f0d565b90506109a48989611017565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526109df818b8b85611083565b5f836109ea86610ec3565b6109f49190612057565b905073ffffffffffffffffffffffffffffffffffffffff8516610a1e57610a1b8882612057565b90505b8b811015610a66576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b955050505050505b9695505050505050565b5f610a9b836080015173ffffffffffffffffffffffffffffffffffffffff161590565b90505f82608001358460c00151610ab2919061206a565b90505f610ac185858585611253565b90505f6606b2787ad08cbc8660e0015103610afd57507f0000000000000000000000000000000000000000000000000000000000000000610b83565b660416edef1601be8660e0015103610b3657507f0000000000000000000000000000000000000000000000000000000000000000610b83565b60e086015167ffffffffffffffff1015610b7c576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5060e08501515b83610bb757610bb786608001517f000000000000000000000000000000000000000000000000000000000000000085611409565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663df00f8fa85610bfe575f610c00565b845b83610c0e60a08a018a61207d565b875f6040518763ffffffff1660e01b8152600401610c30959493929190612455565b604080518083038185885af1158015610c4b573d5f5f3e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190610c709190612559565b505f9050610c81602087018761207d565b90501115610cd55760e086015186517ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b610cbe602089018961207d565b604051610ccc929190612587565b60405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610d0491906125ee565b60405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d3e57610d398282611435565b505050565b610d398383836114a2565b805f03610d82576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ddb5780341015610dd7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610dd773ffffffffffffffffffffffffffffffffffffffff8316333084611510565b610e0a602082018261207d565b15905080610e265750602c610e22602083018361207d565b9050115b15610e5d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610e6b60a083018361207d565b610e7b9161011b9160fb91612701565b610e8491612728565b9050808260c0013514610dd7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff821615610f0557610f0073ffffffffffffffffffffffffffffffffffffffff831630611568565b610f07565b475b92915050565b6060815f8167ffffffffffffffff811115610f2a57610f2a611c36565b604051908082528060200260200182016040528015610f53578160200160208202803683370190505b5090505f5f5b8381101561100c57868682818110610f7357610f736123a5565b9050602002810190610f8591906123d2565b610f969060808101906060016120e5565b9150610fa182610ec3565b838281518110610fb357610fb36123a5565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110045734838281518110610fec57610fec6123a5565b602002602001018181516110009190612057565b9052505b600101610f59565b509095945050505050565b5f5b81811015610d395736838383818110611034576110346123a5565b905060200281019061104691906123d2565b905061105860e0820160c08301612764565b1561107a5761107a61107060608301604084016120e5565b8260800135610d49565b50600101611019565b60208401516040850151849184918490835f5b8181101561123957368a8a838181106110b1576110b16123a5565b90506020028101906110c391906123d2565b90506110f26110d860608301604084016120e5565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611154575061115461110b60408301602084016120e5565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561116b575061116b61110b60208301836120e5565b80156111ee57506111ee61118260a083018361207d565b611190916004915f91612701565b6111999161277d565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611224576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b51611230908261159b565b50600101611096565b5050611248858585858561180e565b505050505050505050565b6112b76040518060a001604052805f67ffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f8152602001606081525090565b60608361134c5760408051600180825281830190925290816020015b604080518082019091525f80825260208201528152602001906001900390816112d35790505090506040518060400160405280876080015173ffffffffffffffffffffffffffffffffffffffff16815260200184815250815f8151811061133c5761133c6123a5565b602002602001018190525061138b565b604080515f8082526020820190925290611387565b604080518082019091525f80825260208201528152602001906001900390816113615790505b5090505b6040805160a08101909152806113a760808801606089016127e3565b67ffffffffffffffff1681523360208201526040908101906113cf90606089019089016120e5565b73ffffffffffffffffffffffffffffffffffffffff168152602001856113f5575f6113f7565b845b81526020019190915295945050505050565b610d398383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a25565b73ffffffffffffffffffffffffffffffffffffffff8216611482576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dd773ffffffffffffffffffffffffffffffffffffffff831682611b4c565b73ffffffffffffffffffffffffffffffffffffffff82166114ef576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d3973ffffffffffffffffffffffffffffffffffffffff84168383611b65565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661155b57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6115b36115ab60208301836120e5565b6017903b1190565b6115e9576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611628576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61163c6110d860608501604086016120e5565b611646575f61164c565b82608001355b90505f61166761166260808601606087016120e5565b610ec3565b9050815f0361169d5761169d61168360608601604087016120e5565b61169360408701602088016120e5565b8660800135611409565b5f806116ac60208701876120e5565b73ffffffffffffffffffffffffffffffffffffffff16846116d060a089018961207d565b6040516116de9291906127fc565b5f6040518083038185875af1925050503d805f8114611718576040519150601f19603f3d011682016040523d82523d5f602084013e61171d565b606091505b5091509150816117305761173081611bae565b5f6117446116626080890160608a016120e5565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861177560208a018a6120e5565b61178560608b0160408c016120e5565b61179560808c0160608d016120e5565b8b608001358987116117a757866117b1565b6117b18a88612057565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261181d600182612057565b81811061182c5761182c6123a5565b905060200281019061183e91906123d2565b61184f9060808101906060016120e5565b90505f5f5f5f5f5f5f5b88811015611a155761186c60018a612057565b8110801561187b575088600114155b15611956578d8d82818110611892576118926123a5565b90506020028101906118a491906123d2565b6118b59060808101906060016120e5565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611956578a81815181106118fc576118fc6123a5565b602002602001015161190d87610ec3565b6119179190612057565b965073ffffffffffffffffffffffffffffffffffffffff86161561193b575f61193d565b895b93508387111561195657611956868d61033b878b612057565b8d8d82818110611968576119686123a5565b905060200281019061197a91906123d2565b61198b9060608101906040016120e5565b945061199685610ec3565b925073ffffffffffffffffffffffffffffffffffffffff8516156119ba575f6119bc565b895b915081831180156119f957508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611a0d57611a0d858d61033b8587612057565b600101611859565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156108d65773ffffffffffffffffffffffffffffffffffffffff8316611a8e576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611b01573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b25919061280b565b10156108d6576108d673ffffffffffffffffffffffffffffffffffffffff85168483611bb8565b5f385f3884865af1610dd75763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611ba5576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611ba5575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611ba557633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611c8757611c87611c36565b60405290565b6040805190810167ffffffffffffffff81118282101715611c8757611c87611c36565b60405160c0810167ffffffffffffffff81118282101715611c8757611c87611c36565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611d1a57611d1a611c36565b604052919050565b5f5f67ffffffffffffffff841115611d3c57611d3c611c36565b50601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016602001611d6f81611cd3565b915050828152838383011115611d83575f5ffd5b828260208301375f602084830101529392505050565b5f82601f830112611da8575f5ffd5b611db783833560208501611d22565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611ddf575f5ffd5b50565b8035611ded81611dbe565b919050565b80358015158114611ded575f5ffd5b5f6101408284031215611e12575f5ffd5b611e1a611c63565b823581529050602082013567ffffffffffffffff811115611e39575f5ffd5b611e4584828501611d99565b602083015250604082013567ffffffffffffffff811115611e64575f5ffd5b611e7084828501611d99565b604083015250611e8260608301611de2565b6060820152611e9360808301611de2565b6080820152611ea460a08301611de2565b60a082015260c0828101359082015260e08083013590820152611eca6101008301611df2565b610100820152611edd6101208301611df2565b61012082015292915050565b5f60e08284031215611ef9575f5ffd5b50919050565b5f5f5f5f60608587031215611f12575f5ffd5b843567ffffffffffffffff811115611f28575f5ffd5b611f3487828801611e01565b945050602085013567ffffffffffffffff811115611f50575f5ffd5b8501601f81018713611f60575f5ffd5b803567ffffffffffffffff811115611f76575f5ffd5b8760208260051b8401011115611f8a575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611fad575f5ffd5b611fb987828801611ee9565b91505092959194509250565b5f5f60408385031215611fd6575f5ffd5b823567ffffffffffffffff811115611fec575f5ffd5b611ff885828601611e01565b925050602083013567ffffffffffffffff811115612014575f5ffd5b61202085828601611ee9565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610f0757610f0761202a565b80820180821115610f0757610f0761202a565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126120b0575f5ffd5b83018035915067ffffffffffffffff8211156120ca575f5ffd5b6020019150368190038213156120de575f5ffd5b9250929050565b5f602082840312156120f5575f5ffd5b8135611db781611dbe565b803567ffffffffffffffff81168114611ded575f5ffd5b5f67ffffffffffffffff82111561213057612130611c36565b5060051b60200190565b5f82601f830112612149575f5ffd5b813561215c61215782612117565b611cd3565b8082825260208201915060208360061b86010192508583111561217d575f5ffd5b602085015b838110156121c85760408188031215612199575f5ffd5b6121a1611c8d565b81356121ac81611dbe565b8152602082810135818301529084529290920191604001612182565b5095945050505050565b5f82601f8301126121e1575f5ffd5b81356121ef61215782612117565b8082825260208201915060208360051b860101925085831115612210575f5ffd5b602085015b838110156121c857803567ffffffffffffffff811115612233575f5ffd5b860160408189037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215612266575f5ffd5b61226e611c8d565b602082013561227c81611dbe565b8152604082013567ffffffffffffffff811115612297575f5ffd5b60208184010192505088601f8301126122ae575f5ffd5b6122bd89833560208501611d22565b60208201528085525050602083019250602081019050612215565b5f602082840312156122e8575f5ffd5b813567ffffffffffffffff8111156122fe575f5ffd5b820160c0818503121561230f575f5ffd5b612317611cb0565b8135815261232760208301612100565b602082015261233860408301611de2565b604082015260608281013590820152608082013567ffffffffffffffff811115612360575f5ffd5b61236c8682850161213a565b60808301525060a082013567ffffffffffffffff81111561238b575f5ffd5b612397868285016121d2565b60a083015250949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612404575f5ffd5b9190910192915050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b67ffffffffffffffff86168152608060208201525f61247860808301868861240e565b828103604084015260a0810167ffffffffffffffff865116825273ffffffffffffffffffffffffffffffffffffffff602087015116602083015273ffffffffffffffffffffffffffffffffffffffff604087015116604083015260608601516060830152608086015160a0608084015281815180845260c0850191506020830194505f93505b80841015612545578451925073ffffffffffffffffffffffffffffffffffffffff8351168252602083015160208301526040820191506020850194506001840193506124fe565b5086151560608701529350610a6e92505050565b5f5f6040838503121561256a575f5ffd5b82519150602083015161257c81611dbe565b809150509250929050565b602081525f61259a60208301848661240e565b949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526126156101608401826125a2565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261265082826125a2565b915050606084015161267a608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516126e961012085018215159052565b50610120840151801515610140850152509392505050565b5f5f8585111561270f575f5ffd5b8386111561271b575f5ffd5b5050820193919092039150565b80356020831015610f07577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b5f60208284031215612774575f5ffd5b611db782611df2565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156127dc577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f602082840312156127f3575f5ffd5b611db782612100565b818382375f9101908152919050565b5f6020828403121561281b575f5ffd5b505191905056fea26469706673582212204710e07ba9dca09046a494ce379b111b789e5dc1ff8b6e80367c957b7bdd02f064736f6c634300081d0033";
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
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
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
                readonly name: "solverReward";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "encodedRoute";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "solanaATA";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
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
                readonly name: "solverReward";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "encodedRoute";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "solanaATA";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
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
