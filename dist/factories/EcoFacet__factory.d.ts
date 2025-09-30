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
    static readonly bytecode = "0x60e0604052632b6653dc60a05263536f6c4d60c05234801561001f575f5ffd5b5060405161299038038061299083398101604081905261003e91610076565b6001600160a01b038116610065576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b03166080526100a3565b5f60208284031215610086575f5ffd5b81516001600160a01b038116811461009c575f5ffd5b9392505050565b60805160a05160c0516128b66100da5f395f61121c01525f6111e701525f8181604801528181610960015261098701526128b65ff3fe608060405260043610610033575f3560e01c80630ff754ea1461003757806320560477146100935780639ab12459146100a8575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a66100a1366004611f5d565b6100bb565b005b6100a66100b6366004612023565b61034d565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61014634476120b5565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101a88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101df576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361021c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610259576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8880610120015115610297576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102a18a886105aa565b5f6102c48b6080015173ffffffffffffffffffffffffffffffffffffffff161590565b90505f816102d2575f6102d8565b88608001355b90506102ef8c5f01518d60c001518d8d338661075a565b60c08d0152816103135788608001358c60c0015161030d91906120b5565b60c08d01525b61031d8c8a6108f6565b5047935050505081811115610340576103405f8461033b85856120b5565b610a52565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103c8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103d834476120b5565b9050846103fd8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610434576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610471576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104ae576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156104ec576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561052a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61053488886105aa565b60c0880151608089015173ffffffffffffffffffffffffffffffffffffffff161561056a576105676080890135826120c8565b90505b610578896080015182610a87565b61058289896108f6565b5047925050508181111561059f5761059f5f8461033b85856120b5565b50505f909155505050565b60a08281015160e08401519091660416edef1601be909114906105cf908401846120db565b90505f03610609576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fffffffffffffffffffffffffee0eee0eee0eee0eee0eee0eee0eee0eee0eee0f73ffffffffffffffffffffffffffffffffffffffff8316016106d85761065360208401846120db565b90505f0361068d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80801561069c575060c0830135155b156106d3576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610749565b6106e56020840184612143565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610749576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610754848483610b3b565b50505050565b5f83808203610795576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f86866107a36001856120b5565b8181106107b2576107b261215e565b90506020028101906107c4919061218b565b6107d5906080810190606001612143565b90505f6107e182610c8f565b905073ffffffffffffffffffffffffffffffffffffffff821661080b5761080834826120b5565b90505b5f6108168989610cd9565b90506108228989610de3565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261085d818b8b85610e4f565b5f8361086886610c8f565b61087291906120b5565b905073ffffffffffffffffffffffffffffffffffffffff851661089c5761089988826120b5565b90505b8b8110156108e4576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b955050505050505b9695505050505050565b5f610919836080015173ffffffffffffffffffffffffffffffffffffffff161590565b90505f82608001358460c0015161093091906120c8565b90505f61093f8585858561101f565b90505f61094f8660e001516111d5565b9050836109855761098586608001517f000000000000000000000000000000000000000000000000000000000000000085611286565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663df00f8fa856109cc575f6109ce565b845b836109dc60a08a018a6120db565b875f6040518763ffffffff1660e01b81526004016109fe95949392919061220e565b604080518083038185885af1158015610a19573d5f5f3e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190610a3e9190612312565b5050610a4a86866112b2565b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a7c57610a778282611384565b505050565b610a778383836113f1565b805f03610ac0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b195780341015610b15576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610b1573ffffffffffffffffffffffffffffffffffffffff831633308461145f565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610b95578015610a7757610a77826114b7565b8015610bcd576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610bdb60a08401846120db565b810190610be89190612518565b60a081015180519192505f91610c00906001906120b5565b81518110610c1057610c1061215e565b60200260200101516020015190505f602482015190508560a0015173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a4a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff821615610cd157610ccc73ffffffffffffffffffffffffffffffffffffffff8316306115c6565b610cd3565b475b92915050565b6060815f8167ffffffffffffffff811115610cf657610cf6611c94565b604051908082528060200260200182016040528015610d1f578160200160208202803683370190505b5090505f5f5b83811015610dd857868682818110610d3f57610d3f61215e565b9050602002810190610d51919061218b565b610d62906080810190606001612143565b9150610d6d82610c8f565b838281518110610d7f57610d7f61215e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610dd05734838281518110610db857610db861215e565b60200260200101818151610dcc91906120b5565b9052505b600101610d25565b509095945050505050565b5f5b81811015610a775736838383818110610e0057610e0061215e565b9050602002810190610e12919061218b565b9050610e2460e0820160c083016125e5565b15610e4657610e46610e3c6060830160408401612143565b8260800135610a87565b50600101610de5565b60208401516040850151849184918490835f5b8181101561100557368a8a83818110610e7d57610e7d61215e565b9050602002810190610e8f919061218b565b9050610ebe610ea46060830160408401612143565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610f205750610f20610ed76040830160208401612143565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610f375750610f37610ed76020830183612143565b8015610fba5750610fba610f4e60a08301836120db565b610f5c916004915f916125fe565b610f6591612625565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610ff0576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b51610ffc90826115f9565b50600101610e62565b5050611014858585858561186c565b505050505050505050565b6110836040518060a001604052805f67ffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f8152602001606081525090565b6060836111185760408051600180825281830190925290816020015b604080518082019091525f808252602082015281526020019060019003908161109f5790505090506040518060400160405280876080015173ffffffffffffffffffffffffffffffffffffffff16815260200184815250815f815181106111085761110861215e565b6020026020010181905250611157565b604080515f8082526020820190925290611153565b604080518082019091525f808252602082015281526020019060019003908161112d5790505b5090505b6040805160a0810190915280611173608088016060890161268b565b67ffffffffffffffff16815233602082015260409081019061119b9060608901908901612143565b73ffffffffffffffffffffffffffffffffffffffff168152602001856111c1575f6111c3565b845b81526020019190915295945050505050565b5f6606b2787ad08cbc820361120b57507f0000000000000000000000000000000000000000000000000000000000000000919050565b660416edef1601be820361124057507f0000000000000000000000000000000000000000000000000000000000000000919050565b67ffffffffffffffff821115611282576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5090565b610a778383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a83565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16036113495760e082015182517ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b61133260208501856120db565b6040516113409291906126a4565b60405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051611378919061270b565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff82166113d1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b1573ffffffffffffffffffffffffffffffffffffffff831682611baa565b73ffffffffffffffffffffffffffffffffffffffff821661143e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a7773ffffffffffffffffffffffffffffffffffffffff84168383611bc3565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166114aa57637939f4245f526004601cfd5b5f60605260405250505050565b6114c460208201826120db565b159050806114e05750602c6114dc60208301836120db565b9050115b15611517576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61152460a08201826120db565b905061013f14611560576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61156e60a08301836120db565b61157e9161011b9160fb916125fe565b6115879161281e565b9050808260c0013514610b15576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6116116116096020830183612143565b6017903b1190565b611647576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611686576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61169a610ea46060850160408601612143565b6116a4575f6116aa565b82608001355b90505f6116c56116c06080860160608701612143565b610c8f565b9050815f036116fb576116fb6116e16060860160408701612143565b6116f16040870160208801612143565b8660800135611286565b5f8061170a6020870187612143565b73ffffffffffffffffffffffffffffffffffffffff168461172e60a08901896120db565b60405161173c92919061285a565b5f6040518083038185875af1925050503d805f8114611776576040519150601f19603f3d011682016040523d82523d5f602084013e61177b565b606091505b50915091508161178e5761178e81611c0c565b5f6117a26116c06080890160608a01612143565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886117d360208a018a612143565b6117e360608b0160408c01612143565b6117f360808c0160608d01612143565b8b60800135898711611805578661180f565b61180f8a886120b5565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261187b6001826120b5565b81811061188a5761188a61215e565b905060200281019061189c919061218b565b6118ad906080810190606001612143565b90505f5f5f5f5f5f5f5b88811015611a73576118ca60018a6120b5565b811080156118d9575088600114155b156119b4578d8d828181106118f0576118f061215e565b9050602002810190611902919061218b565b611913906080810190606001612143565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146119b4578a818151811061195a5761195a61215e565b602002602001015161196b87610c8f565b61197591906120b5565b965073ffffffffffffffffffffffffffffffffffffffff861615611999575f61199b565b895b9350838711156119b4576119b4868d61033b878b6120b5565b8d8d828181106119c6576119c661215e565b90506020028101906119d8919061218b565b6119e9906060810190604001612143565b94506119f485610c8f565b925073ffffffffffffffffffffffffffffffffffffffff851615611a18575f611a1a565b895b91508183118015611a5757508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611a6b57611a6b858d61033b85876120b5565b6001016118b7565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156107545773ffffffffffffffffffffffffffffffffffffffff8316611aec576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611b5f573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b839190612869565b10156107545761075473ffffffffffffffffffffffffffffffffffffffff85168483611c16565b5f385f3884865af1610b155763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c03576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c03575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611c0357633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611ce557611ce5611c94565b60405290565b6040805190810167ffffffffffffffff81118282101715611ce557611ce5611c94565b60405160c0810167ffffffffffffffff81118282101715611ce557611ce5611c94565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611d7857611d78611c94565b604052919050565b5f5f67ffffffffffffffff841115611d9a57611d9a611c94565b50601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016602001611dcd81611d31565b915050828152838383011115611de1575f5ffd5b828260208301375f602084830101529392505050565b5f82601f830112611e06575f5ffd5b611e1583833560208501611d80565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611e3d575f5ffd5b50565b8035611e4b81611e1c565b919050565b80358015158114611e4b575f5ffd5b5f6101408284031215611e70575f5ffd5b611e78611cc1565b823581529050602082013567ffffffffffffffff811115611e97575f5ffd5b611ea384828501611df7565b602083015250604082013567ffffffffffffffff811115611ec2575f5ffd5b611ece84828501611df7565b604083015250611ee060608301611e40565b6060820152611ef160808301611e40565b6080820152611f0260a08301611e40565b60a082015260c0828101359082015260e08083013590820152611f286101008301611e50565b610100820152611f3b6101208301611e50565b61012082015292915050565b5f60e08284031215611f57575f5ffd5b50919050565b5f5f5f5f60608587031215611f70575f5ffd5b843567ffffffffffffffff811115611f86575f5ffd5b611f9287828801611e5f565b945050602085013567ffffffffffffffff811115611fae575f5ffd5b8501601f81018713611fbe575f5ffd5b803567ffffffffffffffff811115611fd4575f5ffd5b8760208260051b8401011115611fe8575f5ffd5b60209190910193509150604085013567ffffffffffffffff81111561200b575f5ffd5b61201787828801611f47565b91505092959194509250565b5f5f60408385031215612034575f5ffd5b823567ffffffffffffffff81111561204a575f5ffd5b61205685828601611e5f565b925050602083013567ffffffffffffffff811115612072575f5ffd5b61207e85828601611f47565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610cd357610cd3612088565b80820180821115610cd357610cd3612088565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261210e575f5ffd5b83018035915067ffffffffffffffff821115612128575f5ffd5b60200191503681900382131561213c575f5ffd5b9250929050565b5f60208284031215612153575f5ffd5b8135611e1581611e1c565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126121bd575f5ffd5b9190910192915050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b67ffffffffffffffff86168152608060208201525f6122316080830186886121c7565b828103604084015260a0810167ffffffffffffffff865116825273ffffffffffffffffffffffffffffffffffffffff602087015116602083015273ffffffffffffffffffffffffffffffffffffffff604087015116604083015260608601516060830152608086015160a0608084015281815180845260c0850191506020830194505f93505b808410156122fe578451925073ffffffffffffffffffffffffffffffffffffffff8351168252602083015160208301526040820191506020850194506001840193506122b7565b50861515606087015293506108ec92505050565b5f5f60408385031215612323575f5ffd5b82519150602083015161233581611e1c565b809150509250929050565b803567ffffffffffffffff81168114611e4b575f5ffd5b5f67ffffffffffffffff82111561237057612370611c94565b5060051b60200190565b5f82601f830112612389575f5ffd5b813561239c61239782612357565b611d31565b8082825260208201915060208360061b8601019250858311156123bd575f5ffd5b602085015b8381101561240857604081880312156123d9575f5ffd5b6123e1611ceb565b81356123ec81611e1c565b81526020828101358183015290845292909201916040016123c2565b5095945050505050565b5f82601f830112612421575f5ffd5b813561242f61239782612357565b8082825260208201915060208360051b860101925085831115612450575f5ffd5b602085015b8381101561240857803567ffffffffffffffff811115612473575f5ffd5b860160408189037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00112156124a6575f5ffd5b6124ae611ceb565b60208201356124bc81611e1c565b8152604082013567ffffffffffffffff8111156124d7575f5ffd5b60208184010192505088601f8301126124ee575f5ffd5b6124fd89833560208501611d80565b60208201528085525050602083019250602081019050612455565b5f60208284031215612528575f5ffd5b813567ffffffffffffffff81111561253e575f5ffd5b820160c0818503121561254f575f5ffd5b612557611d0e565b8135815261256760208301612340565b602082015261257860408301611e40565b604082015260608281013590820152608082013567ffffffffffffffff8111156125a0575f5ffd5b6125ac8682850161237a565b60808301525060a082013567ffffffffffffffff8111156125cb575f5ffd5b6125d786828501612412565b60a083015250949350505050565b5f602082840312156125f5575f5ffd5b611e1582611e50565b5f5f8585111561260c575f5ffd5b83861115612618575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612684577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f6020828403121561269b575f5ffd5b611e1582612340565b602081525f6126b76020830184866121c7565b949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526127326101608401826126bf565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261276d82826126bf565b9150506060840151612797608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161280661012085018215159052565b50610120840151801515610140850152509392505050565b80356020831015610cd3577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b818382375f9101908152919050565b5f60208284031215612879575f5ffd5b505191905056fea264697066735822122013b1a508b5226a83c53799548f72a53b705a8173990690d3151583de07af514664736f6c634300081d0033";
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
