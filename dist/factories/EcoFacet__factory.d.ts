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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051612b74380380612b7483398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b608051612ab56100bf5f395f8181604801528181610b3c01528181610c0c0152610c480152612ab55ff3fe608060405260043610610033575f3560e01c80630ff754ea146100375780637e56b7b0146100935780639e75aa95146100b4575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561009e575f5ffd5b506100b26100ad36600461210f565b6100c7565b005b6100b26100c2366004612174565b61031b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610142576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560a0830151839073ffffffffffffffffffffffffffffffffffffffff16610199576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101d6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610213576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8380610100015115610251576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b848061012001511561028f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856102b2816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102e9576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102f387876105ed565b61030587608001518860c001516109a3565b61030f8787610a57565b50505f90925550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610396576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103a6344761223a565b9050868061010001516103e5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876104088160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561043f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361047c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88806101200151156104f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8961051a816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610551576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055b8b896105ed565b5f6105708c5f01518d60c001518d8d33610d78565b90508b60c001518111156105b3575f8c60c001518261058f919061223a565b60808e01519091506105b1906105ab60c08d0160a08e01612272565b83610eba565b505b6105bd8c8a610a57565b50479350505050818111156105e0576105e05f846105db858561223a565b610f2d565b50505f9091555050505050565b5f6105fe6040830160208401612272565b73ffffffffffffffffffffffffffffffffffffffff160361064b576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61065c60c0830160a08401612272565b73ffffffffffffffffffffffffffffffffffffffff16036106a9576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b426106ba60608301604084016122a4565b67ffffffffffffffff16116106fb576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015160e0830151660416edef1601be147fffffffffffffffffffffffffee0eee0eee0eee0eee0eee0eee0eee0eee0eee0f73ffffffffffffffffffffffffffffffffffffffff8316016108585780610782576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61078c83806122bd565b90505f036107c6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080830135610801576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61013f61081160608501856122bd565b90501461084a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61085383610f5d565b61099d565b61086560608401846122bd565b90505f0361089f576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156108d7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6108e560608501856122bd565b8101906108f291906124e6565b60a081015180519192505f9161090a9060019061223a565b8151811061091a5761091a6125b3565b60200260200101516020015190505f602482015190508660a0015173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610999576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505b50505050565b805f036109dc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a355780341015610a31576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a3173ffffffffffffffffffffffffffffffffffffffff831633308461101f565b60c08201515f610a68848484611077565b90505f6606b2787ad08cbc8560e0015103610a885750632b6653dc610af2565b660416edef1601be8560e0015103610aa5575063536f6c4d610af2565b60e085015167ffffffffffffffff1015610aeb576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5060e08401515b5f610b0a82610b0460608801886122bd565b866111fd565b90505f6040517f1299d617000000000000000000000000000000000000000000000000000000008152600481018390527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690631299d61790602401602060405180830381865afa158015610b96573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bba919061260d565b6003811115610bcb57610bcb6125e0565b14610c02576040517fe431e17800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c3186608001517f0000000000000000000000000000000000000000000000000000000000000000866112c0565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663df00f8fa83610c7b60608901896122bd565b875f6040518663ffffffff1660e01b8152600401610c9d959493929190612737565b60408051808303815f875af1158015610cb8573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cdc9190612781565b5050660416edef1601be8660e0015103610d395760e086015186517ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b610d2288806122bd565b604051610d309291906127af565b60405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610d689190612816565b60405180910390a1505050505050565b5f82808203610db3576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610dc160018561223a565b818110610dd057610dd06125b3565b9050602002810190610de29190612929565b610df3906080810190606001612272565b90505f610dff826112ec565b905073ffffffffffffffffffffffffffffffffffffffff8216610e2957610e26348261223a565b90505b5f610e348888611336565b9050610e408888611440565b610e4d8a898989856114ac565b5f82610e58856112ec565b610e62919061223a565b905089811015610eac576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f07576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f2873ffffffffffffffffffffffffffffffffffffffff8416838361170b565b505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f5257610f288282611754565b610f28838383610eba565b6020610f6982806122bd565b90501080610f825750602c610f7e82806122bd565b9050115b15610fb9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610fc760608301836122bd565b610fd79161011b9160fb91612965565b610fe09161298c565b905080826080013514610a31576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661106a57637939f4245f526004601cfd5b5f60605260405250505050565b6110db6040518060a001604052805f67ffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f8152602001606081525090565b6040805160018082528183019092525f91816020015b604080518082019091525f80825260208201528152602001906001900390816110f15790505090506040518060400160405280866080015173ffffffffffffffffffffffffffffffffffffffff16815260200184815250815f8151811061115a5761115a6125b3565b60200260200101819052506040518060a0016040528085604001602081019061118391906122a4565b67ffffffffffffffff1681526020016111a260c0870160a08801612272565b73ffffffffffffffffffffffffffffffffffffffff1681526020018560200160208101906111d09190612272565b73ffffffffffffffffffffffffffffffffffffffff1681525f602082015260400191909152949350505050565b5f5f848460405161120f9291906129c8565b604051809103902090505f8360405160200161122b91906129d7565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018152828252805160209182012060c09a909a1b7fffffffffffffffff000000000000000000000000000000000000000000000000168184015260288301949094526048808301999099528051808303909901895260689091019052508551950194909420949350505050565b610f288383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6117c1565b5f73ffffffffffffffffffffffffffffffffffffffff82161561132e5761132973ffffffffffffffffffffffffffffffffffffffff8316306118e8565b611330565b475b92915050565b6060815f8167ffffffffffffffff81111561135357611353611e46565b60405190808252806020026020018201604052801561137c578160200160208202803683370190505b5090505f5f5b838110156114355786868281811061139c5761139c6125b3565b90506020028101906113ae9190612929565b6113bf906080810190606001612272565b91506113ca826112ec565b8382815181106113dc576113dc6125b3565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661142d5734838281518110611415576114156125b3565b60200260200101818151611429919061223a565b9052505b600101611382565b509095945050505050565b5f5b81811015610f28573683838381811061145d5761145d6125b3565b905060200281019061146f9190612929565b905061148160e0820160c083016129e9565b156114a3576114a36114996060830160408401612272565b82608001356109a3565b50600101611442565b83838383825f5b818110156116f157368a8a838181106114ce576114ce6125b3565b90506020028101906114e09190612929565b905061158f6114f26020830183612272565b6114ff60a08401846122bd565b61150d916004915f91612965565b61151691612a02565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806116a757506115c36115a96060830160408401612272565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561161757506115d86020820182612272565b73ffffffffffffffffffffffffffffffffffffffff166115fe6040830160208401612272565b73ffffffffffffffffffffffffffffffffffffffff1614155b80156116a757506116a56116316040830160208401612272565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff1690565b155b156116de576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116e88c8261191b565b506001016114b3565b5050611700848484845f611b8e565b505050505050505050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661174b576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff82166117a1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a3173ffffffffffffffffffffffffffffffffffffffff831682611da5565b73ffffffffffffffffffffffffffffffffffffffff84161561099d5773ffffffffffffffffffffffffffffffffffffffff831661182a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561189d573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118c19190612a68565b101561099d5761099d73ffffffffffffffffffffffffffffffffffffffff85168483611dbe565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61193361192b6020830183612272565b6017903b1190565b611969576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036119a8576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6119bc6115a96060850160408601612272565b6119c6575f6119cc565b82608001355b90505f6119e76119e26080860160608701612272565b6112ec565b9050815f03611a1d57611a1d611a036060860160408701612272565b611a136040870160208801612272565b86608001356112c0565b5f80611a2c6020870187612272565b73ffffffffffffffffffffffffffffffffffffffff1684611a5060a08901896122bd565b604051611a5e9291906129c8565b5f6040518083038185875af1925050503d805f8114611a98576040519150601f19603f3d011682016040523d82523d5f602084013e611a9d565b606091505b509150915081611ab057611ab081611e3c565b5f611ac46119e26080890160608a01612272565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611af560208a018a612272565b611b0560608b0160408c01612272565b611b1560808c0160608d01612272565b8b60800135898711611b275786611b31565b611b318a8861223a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611b9d60018261223a565b818110611bac57611bac6125b3565b9050602002810190611bbe9190612929565b611bcf906080810190606001612272565b90505f5f5f5f5f5f5f5b88811015611d9557611bec60018a61223a565b81108015611bfb575088600114155b15611cd6578d8d82818110611c1257611c126125b3565b9050602002810190611c249190612929565b611c35906080810190606001612272565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611cd6578a8181518110611c7c57611c7c6125b3565b6020026020010151611c8d876112ec565b611c97919061223a565b965073ffffffffffffffffffffffffffffffffffffffff861615611cbb575f611cbd565b895b935083871115611cd657611cd6868d6105db878b61223a565b8d8d82818110611ce857611ce86125b3565b9050602002810190611cfa9190612929565b611d0b906060810190604001612272565b9450611d16856112ec565b925073ffffffffffffffffffffffffffffffffffffffff851615611d3a575f611d3c565b895b91508183118015611d7957508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611d8d57611d8d858d6105db858761223a565b600101611bd9565b5050505050505050505050505050565b5f385f3884865af1610a315763b12d13eb5f526004601cfd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661174b575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661174b57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611e9757611e97611e46565b60405290565b6040805190810167ffffffffffffffff81118282101715611e9757611e97611e46565b60405160c0810167ffffffffffffffff81118282101715611e9757611e97611e46565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611f2a57611f2a611e46565b604052919050565b5f5f67ffffffffffffffff841115611f4c57611f4c611e46565b50601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016602001611f7f81611ee3565b915050828152838383011115611f93575f5ffd5b828260208301375f602084830101529392505050565b5f82601f830112611fb8575f5ffd5b611fc783833560208501611f32565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611fef575f5ffd5b50565b8035611ffd81611fce565b919050565b80358015158114611ffd575f5ffd5b5f6101408284031215612022575f5ffd5b61202a611e73565b823581529050602082013567ffffffffffffffff811115612049575f5ffd5b61205584828501611fa9565b602083015250604082013567ffffffffffffffff811115612074575f5ffd5b61208084828501611fa9565b60408301525061209260608301611ff2565b60608201526120a360808301611ff2565b60808201526120b460a08301611ff2565b60a082015260c0828101359082015260e080830135908201526120da6101008301612002565b6101008201526120ed6101208301612002565b61012082015292915050565b5f60c08284031215612109575f5ffd5b50919050565b5f5f60408385031215612120575f5ffd5b823567ffffffffffffffff811115612136575f5ffd5b61214285828601612011565b925050602083013567ffffffffffffffff81111561215e575f5ffd5b61216a858286016120f9565b9150509250929050565b5f5f5f5f60608587031215612187575f5ffd5b843567ffffffffffffffff81111561219d575f5ffd5b6121a987828801612011565b945050602085013567ffffffffffffffff8111156121c5575f5ffd5b8501601f810187136121d5575f5ffd5b803567ffffffffffffffff8111156121eb575f5ffd5b8760208260051b84010111156121ff575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115612222575f5ffd5b61222e878288016120f9565b91505092959194509250565b81810381811115611330577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215612282575f5ffd5b8135611fc781611fce565b803567ffffffffffffffff81168114611ffd575f5ffd5b5f602082840312156122b4575f5ffd5b611fc78261228d565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122f0575f5ffd5b83018035915067ffffffffffffffff82111561230a575f5ffd5b60200191503681900382131561231e575f5ffd5b9250929050565b5f67ffffffffffffffff82111561233e5761233e611e46565b5060051b60200190565b5f82601f830112612357575f5ffd5b813561236a61236582612325565b611ee3565b8082825260208201915060208360061b86010192508583111561238b575f5ffd5b602085015b838110156123d657604081880312156123a7575f5ffd5b6123af611e9d565b81356123ba81611fce565b8152602082810135818301529084529290920191604001612390565b5095945050505050565b5f82601f8301126123ef575f5ffd5b81356123fd61236582612325565b8082825260208201915060208360051b86010192508583111561241e575f5ffd5b602085015b838110156123d657803567ffffffffffffffff811115612441575f5ffd5b860160408189037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215612474575f5ffd5b61247c611e9d565b602082013561248a81611fce565b8152604082013567ffffffffffffffff8111156124a5575f5ffd5b60208184010192505088601f8301126124bc575f5ffd5b6124cb89833560208501611f32565b60208201528085525050602083019250602081019050612423565b5f602082840312156124f6575f5ffd5b813567ffffffffffffffff81111561250c575f5ffd5b820160c0818503121561251d575f5ffd5b612525611ec0565b813581526125356020830161228d565b602082015261254660408301611ff2565b604082015260608281013590820152608082013567ffffffffffffffff81111561256e575f5ffd5b61257a86828501612348565b60808301525060a082013567ffffffffffffffff811115612599575f5ffd5b6125a5868285016123e0565b60a083015250949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f6020828403121561261d575f5ffd5b815160048110611fc7575f5ffd5b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f60a0830167ffffffffffffffff835116845273ffffffffffffffffffffffffffffffffffffffff602084015116602085015273ffffffffffffffffffffffffffffffffffffffff604084015116604085015260608301516060850152608083015160a0608086015281815180845260c0870191506020830193505f92505b808310156123d657835173ffffffffffffffffffffffffffffffffffffffff815116835260208101516020840152506040820191506020840193506001830192506126f1565b67ffffffffffffffff86168152608060208201525f61275a60808301868861262b565b828103604084015261276c8186612672565b91505082151560608301529695505050505050565b5f5f60408385031215612792575f5ffd5b8251915060208301516127a481611fce565b809150509250929050565b602081525f6127c260208301848661262b565b949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f6020830151610140604084015261283d6101608401826127ca565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261287882826127ca565b91505060608401516128a2608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161291161012085018215159052565b50610120840151801515610140850152509392505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261295b575f5ffd5b9190910192915050565b5f5f85851115612973575f5ffd5b8386111561297f575f5ffd5b5050820193919092039150565b80356020831015611330577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b818382375f9101908152919050565b602081525f611fc76020830184612672565b5f602082840312156129f9575f5ffd5b611fc782612002565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612a61577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612a78575f5ffd5b505191905056fea264697066735822122086e7c70a3a0ac2b4ebd01ddec101dcdad4a54ed5d07c7fa07bead8497f27457364736f6c634300081d0033";
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
