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
    static readonly bytecode = "0x60e0604052632b6653dc60a05263536f6c4d60c05234801561001f575f5ffd5b5060405161297538038061297583398101604081905261003e91610076565b6001600160a01b038116610065576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b03166080526100a3565b5f60208284031215610086575f5ffd5b81516001600160a01b038116811461009c575f5ffd5b9392505050565b60805160a05160c05161289b6100da5f395f61131001525f6112db01525f8181604801528181610ae20152610b09015261289b5ff3fe608060405260043610610033575f3560e01c80630ff754ea1461003757806320560477146100935780639ab12459146100a8575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a66100a1366004611f42565b6100bb565b005b6100a66100b6366004612008565b61034d565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610146344761209a565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101a88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101df576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361021c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610259576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8880610120015115610297576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102a18a886105aa565b5f6102c48b6080015173ffffffffffffffffffffffffffffffffffffffff161590565b90505f816102d2575f6102d8565b88608001355b90506102ef8c5f01518d60c001518d8d33866108dc565b60c08d0152816103135788608001358c60c0015161030d919061209a565b60c08d01525b61031d8c8a610a78565b5047935050505081811115610340576103405f8461033b858561209a565b610bd4565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103c8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103d8344761209a565b9050846103fd8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610434576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610471576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104ae576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156104ec576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561052a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61053488886105aa565b60c0880151608089015173ffffffffffffffffffffffffffffffffffffffff161561056a576105676080890135826120ad565b90505b610578896080015182610c09565b6105828989610a78565b5047925050508181111561059f5761059f5f8461033b858561209a565b50505f909155505050565b60a082015160e0830151660416edef1601be147fffffffffffffffffffffffffee0eee0eee0eee0eee0eee0eee0eee0eee0eee0f73ffffffffffffffffffffffffffffffffffffffff8316016107205761060760208401846120c0565b90505f03610641576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156106d95760c0830135610682576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61068f60a08401846120c0565b905061013f146106cb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106d483610cbd565b6108d6565b6106e660a08401846120c0565b90505f036106d4576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61072d60a08401846120c0565b90505f03610767576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107746020840184612128565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146107d8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8015610810576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61081e60a08501856120c0565b81019061082b919061231b565b60a081015180519192505f916108439060019061209a565b81518110610853576108536123e8565b60200260200101516020015190505f602482015190508660a0015173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146108d2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505b50505050565b5f83808203610917576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f868661092560018561209a565b818110610934576109346123e8565b90506020028101906109469190612415565b610957906080810190606001612128565b90505f61096382610d83565b905073ffffffffffffffffffffffffffffffffffffffff821661098d5761098a348261209a565b90505b5f6109988989610dcd565b90506109a48989610ed7565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526109df818b8b85610f43565b5f836109ea86610d83565b6109f4919061209a565b905073ffffffffffffffffffffffffffffffffffffffff8516610a1e57610a1b888261209a565b90505b8b811015610a66576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b955050505050505b9695505050505050565b5f610a9b836080015173ffffffffffffffffffffffffffffffffffffffff161590565b90505f82608001358460c00151610ab291906120ad565b90505f610ac185858585611113565b90505f610ad18660e001516112c9565b905083610b0757610b0786608001517f00000000000000000000000000000000000000000000000000000000000000008561137a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663df00f8fa85610b4e575f610b50565b845b83610b5e60a08a018a6120c0565b875f6040518763ffffffff1660e01b8152600401610b80959493929190612498565b604080518083038185885af1158015610b9b573d5f5f3e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190610bc0919061259c565b5050610bcc86866113a6565b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610bfe57610bf98282611478565b505050565b610bf98383836114e5565b805f03610c42576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c9b5780341015610c97576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610c9773ffffffffffffffffffffffffffffffffffffffff8316333084611553565b610cca60208201826120c0565b15905080610ce65750602c610ce260208301836120c0565b9050115b15610d1d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610d2b60a08301836120c0565b610d3b9161011b9160fb916125ca565b610d44916125f1565b9050808260c0013514610c97576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff821615610dc557610dc073ffffffffffffffffffffffffffffffffffffffff8316306115ab565b610dc7565b475b92915050565b6060815f8167ffffffffffffffff811115610dea57610dea611c79565b604051908082528060200260200182016040528015610e13578160200160208202803683370190505b5090505f5f5b83811015610ecc57868682818110610e3357610e336123e8565b9050602002810190610e459190612415565b610e56906080810190606001612128565b9150610e6182610d83565b838281518110610e7357610e736123e8565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ec45734838281518110610eac57610eac6123e8565b60200260200101818151610ec0919061209a565b9052505b600101610e19565b509095945050505050565b5f5b81811015610bf95736838383818110610ef457610ef46123e8565b9050602002810190610f069190612415565b9050610f1860e0820160c0830161262d565b15610f3a57610f3a610f306060830160408401612128565b8260800135610c09565b50600101610ed9565b60208401516040850151849184918490835f5b818110156110f957368a8a83818110610f7157610f716123e8565b9050602002810190610f839190612415565b9050610fb2610f986060830160408401612128565b73ffffffffffffffffffffffffffffffffffffffff161590565b806110145750611014610fcb6040830160208401612128565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561102b575061102b610fcb6020830183612128565b80156110ae57506110ae61104260a08301836120c0565b611050916004915f916125ca565b61105991612646565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6110e4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b516110f090826115de565b50600101610f56565b50506111088585858585611851565b505050505050505050565b6111776040518060a001604052805f67ffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f8152602001606081525090565b60608361120c5760408051600180825281830190925290816020015b604080518082019091525f80825260208201528152602001906001900390816111935790505090506040518060400160405280876080015173ffffffffffffffffffffffffffffffffffffffff16815260200184815250815f815181106111fc576111fc6123e8565b602002602001018190525061124b565b604080515f8082526020820190925290611247565b604080518082019091525f80825260208201528152602001906001900390816112215790505b5090505b6040805160a081019091528061126760808801606089016126ac565b67ffffffffffffffff16815233602082015260409081019061128f9060608901908901612128565b73ffffffffffffffffffffffffffffffffffffffff168152602001856112b5575f6112b7565b845b81526020019190915295945050505050565b5f6606b2787ad08cbc82036112ff57507f0000000000000000000000000000000000000000000000000000000000000000919050565b660416edef1601be820361133457507f0000000000000000000000000000000000000000000000000000000000000000919050565b67ffffffffffffffff821115611376576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5090565b610bf98383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a68565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff160361143d5760e082015182517ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b61142660208501856120c0565b6040516114349291906126c5565b60405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161146c919061272c565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff82166114c5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c9773ffffffffffffffffffffffffffffffffffffffff831682611b8f565b73ffffffffffffffffffffffffffffffffffffffff8216611532576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bf973ffffffffffffffffffffffffffffffffffffffff84168383611ba8565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661159e57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6115f66115ee6020830183612128565b6017903b1190565b61162c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361166b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61167f610f986060850160408601612128565b611689575f61168f565b82608001355b90505f6116aa6116a56080860160608701612128565b610d83565b9050815f036116e0576116e06116c66060860160408701612128565b6116d66040870160208801612128565b866080013561137a565b5f806116ef6020870187612128565b73ffffffffffffffffffffffffffffffffffffffff168461171360a08901896120c0565b60405161172192919061283f565b5f6040518083038185875af1925050503d805f811461175b576040519150601f19603f3d011682016040523d82523d5f602084013e611760565b606091505b5091509150816117735761177381611bf1565b5f6117876116a56080890160608a01612128565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886117b860208a018a612128565b6117c860608b0160408c01612128565b6117d860808c0160608d01612128565b8b608001358987116117ea57866117f4565b6117f48a8861209a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261186060018261209a565b81811061186f5761186f6123e8565b90506020028101906118819190612415565b611892906080810190606001612128565b90505f5f5f5f5f5f5f5b88811015611a58576118af60018a61209a565b811080156118be575088600114155b15611999578d8d828181106118d5576118d56123e8565b90506020028101906118e79190612415565b6118f8906080810190606001612128565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611999578a818151811061193f5761193f6123e8565b602002602001015161195087610d83565b61195a919061209a565b965073ffffffffffffffffffffffffffffffffffffffff86161561197e575f611980565b895b93508387111561199957611999868d61033b878b61209a565b8d8d828181106119ab576119ab6123e8565b90506020028101906119bd9190612415565b6119ce906060810190604001612128565b94506119d985610d83565b925073ffffffffffffffffffffffffffffffffffffffff8516156119fd575f6119ff565b895b91508183118015611a3c57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611a5057611a50858d61033b858761209a565b60010161189c565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156108d65773ffffffffffffffffffffffffffffffffffffffff8316611ad1576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611b44573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b68919061284e565b10156108d6576108d673ffffffffffffffffffffffffffffffffffffffff85168483611bfb565b5f385f3884865af1610c975763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611be8576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611be8575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611be857633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611cca57611cca611c79565b60405290565b6040805190810167ffffffffffffffff81118282101715611cca57611cca611c79565b60405160c0810167ffffffffffffffff81118282101715611cca57611cca611c79565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611d5d57611d5d611c79565b604052919050565b5f5f67ffffffffffffffff841115611d7f57611d7f611c79565b50601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016602001611db281611d16565b915050828152838383011115611dc6575f5ffd5b828260208301375f602084830101529392505050565b5f82601f830112611deb575f5ffd5b611dfa83833560208501611d65565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611e22575f5ffd5b50565b8035611e3081611e01565b919050565b80358015158114611e30575f5ffd5b5f6101408284031215611e55575f5ffd5b611e5d611ca6565b823581529050602082013567ffffffffffffffff811115611e7c575f5ffd5b611e8884828501611ddc565b602083015250604082013567ffffffffffffffff811115611ea7575f5ffd5b611eb384828501611ddc565b604083015250611ec560608301611e25565b6060820152611ed660808301611e25565b6080820152611ee760a08301611e25565b60a082015260c0828101359082015260e08083013590820152611f0d6101008301611e35565b610100820152611f206101208301611e35565b61012082015292915050565b5f60e08284031215611f3c575f5ffd5b50919050565b5f5f5f5f60608587031215611f55575f5ffd5b843567ffffffffffffffff811115611f6b575f5ffd5b611f7787828801611e44565b945050602085013567ffffffffffffffff811115611f93575f5ffd5b8501601f81018713611fa3575f5ffd5b803567ffffffffffffffff811115611fb9575f5ffd5b8760208260051b8401011115611fcd575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611ff0575f5ffd5b611ffc87828801611f2c565b91505092959194509250565b5f5f60408385031215612019575f5ffd5b823567ffffffffffffffff81111561202f575f5ffd5b61203b85828601611e44565b925050602083013567ffffffffffffffff811115612057575f5ffd5b61206385828601611f2c565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610dc757610dc761206d565b80820180821115610dc757610dc761206d565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126120f3575f5ffd5b83018035915067ffffffffffffffff82111561210d575f5ffd5b602001915036819003821315612121575f5ffd5b9250929050565b5f60208284031215612138575f5ffd5b8135611dfa81611e01565b803567ffffffffffffffff81168114611e30575f5ffd5b5f67ffffffffffffffff82111561217357612173611c79565b5060051b60200190565b5f82601f83011261218c575f5ffd5b813561219f61219a8261215a565b611d16565b8082825260208201915060208360061b8601019250858311156121c0575f5ffd5b602085015b8381101561220b57604081880312156121dc575f5ffd5b6121e4611cd0565b81356121ef81611e01565b81526020828101358183015290845292909201916040016121c5565b5095945050505050565b5f82601f830112612224575f5ffd5b813561223261219a8261215a565b8082825260208201915060208360051b860101925085831115612253575f5ffd5b602085015b8381101561220b57803567ffffffffffffffff811115612276575f5ffd5b860160408189037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00112156122a9575f5ffd5b6122b1611cd0565b60208201356122bf81611e01565b8152604082013567ffffffffffffffff8111156122da575f5ffd5b60208184010192505088601f8301126122f1575f5ffd5b61230089833560208501611d65565b60208201528085525050602083019250602081019050612258565b5f6020828403121561232b575f5ffd5b813567ffffffffffffffff811115612341575f5ffd5b820160c08185031215612352575f5ffd5b61235a611cf3565b8135815261236a60208301612143565b602082015261237b60408301611e25565b604082015260608281013590820152608082013567ffffffffffffffff8111156123a3575f5ffd5b6123af8682850161217d565b60808301525060a082013567ffffffffffffffff8111156123ce575f5ffd5b6123da86828501612215565b60a083015250949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612447575f5ffd5b9190910192915050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b67ffffffffffffffff86168152608060208201525f6124bb608083018688612451565b828103604084015260a0810167ffffffffffffffff865116825273ffffffffffffffffffffffffffffffffffffffff602087015116602083015273ffffffffffffffffffffffffffffffffffffffff604087015116604083015260608601516060830152608086015160a0608084015281815180845260c0850191506020830194505f93505b80841015612588578451925073ffffffffffffffffffffffffffffffffffffffff835116825260208301516020830152604082019150602085019450600184019350612541565b5086151560608701529350610a6e92505050565b5f5f604083850312156125ad575f5ffd5b8251915060208301516125bf81611e01565b809150509250929050565b5f5f858511156125d8575f5ffd5b838611156125e4575f5ffd5b5050820193919092039150565b80356020831015610dc7577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b5f6020828403121561263d575f5ffd5b611dfa82611e35565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156126a5577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f602082840312156126bc575f5ffd5b611dfa82612143565b602081525f6126d8602083018486612451565b949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526127536101608401826126e0565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261278e82826126e0565b91505060608401516127b8608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161282761012085018215159052565b50610120840151801515610140850152509392505050565b818382375f9101908152919050565b5f6020828403121561285e575f5ffd5b505191905056fea2646970667358221220985fe99ecb49279f9f8b3ddf530f98d77041c1ac194d57b37f6a96dd8cbe77d964736f6c634300081d0033";
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
