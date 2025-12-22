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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051612b60380380612b6083398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b608051612aa16100bf5f395f8181604801528181610b3c01528181610c0c0152610c480152612aa15ff3fe608060405260043610610033575f3560e01c80630ff754ea146100375780637e56b7b0146100935780639e75aa95146100b4575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561009e575f5ffd5b506100b26100ad3660046120fb565b6100c7565b005b6100b26100c2366004612160565b61031b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610142576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560a0830151839073ffffffffffffffffffffffffffffffffffffffff16610199576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101d6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610213576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8380610100015115610251576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b848061012001511561028f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856102b2816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102e9576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102f387876105ed565b61030587608001518860c001516109a3565b61030f8787610a57565b50505f90925550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610396576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103a63447612226565b9050868061010001516103e5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876104088160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561043f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361047c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88806101200151156104f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8961051a816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610551576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055b8b896105ed565b5f6105708c5f01518d60c001518d8d33610d78565b90508b60c001518111156105b3575f8c60c001518261058f9190612226565b60808e01519091506105b1906105ab60c08d0160a08e0161225e565b83610eba565b505b6105bd8c8a610a57565b50479350505050818111156105e0576105e05f846105db8585612226565b610f2d565b50505f9091555050505050565b5f6105fe604083016020840161225e565b73ffffffffffffffffffffffffffffffffffffffff160361064b576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61065c60c0830160a0840161225e565b73ffffffffffffffffffffffffffffffffffffffff16036106a9576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b426106ba6060830160408401612290565b67ffffffffffffffff16116106fb576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015160e0830151660416edef1601be147fffffffffffffffffffffffffee0eee0eee0eee0eee0eee0eee0eee0eee0eee0f73ffffffffffffffffffffffffffffffffffffffff8316016108585780610782576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61078c83806122a9565b90505f036107c6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080830135610801576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61013f61081160608501856122a9565b90501461084a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61085383610f5d565b61099d565b61086560608401846122a9565b90505f0361089f576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156108d7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6108e560608501856122a9565b8101906108f291906124d2565b60a081015180519192505f9161090a90600190612226565b8151811061091a5761091a61259f565b60200260200101516020015190505f602482015190508660a0015173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610999576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505b50505050565b805f036109dc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a355780341015610a31576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a3173ffffffffffffffffffffffffffffffffffffffff831633308461101f565b60c08201515f610a68848484611077565b90505f6606b2787ad08cbc8560e0015103610a885750632b6653dc610af2565b660416edef1601be8560e0015103610aa5575063536f6c4d610af2565b60e085015167ffffffffffffffff1015610aeb576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5060e08401515b5f610b0a82610b0460608801886122a9565b866111fd565b90505f6040517f1299d617000000000000000000000000000000000000000000000000000000008152600481018390527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690631299d61790602401602060405180830381865afa158015610b96573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bba91906125f9565b6003811115610bcb57610bcb6125cc565b14610c02576040517fe431e17800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c3186608001517f0000000000000000000000000000000000000000000000000000000000000000866112c0565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663df00f8fa83610c7b60608901896122a9565b875f6040518663ffffffff1660e01b8152600401610c9d959493929190612723565b60408051808303815f875af1158015610cb8573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cdc919061276d565b5050660416edef1601be8660e0015103610d395760e086015186517ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b610d2288806122a9565b604051610d3092919061279b565b60405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610d689190612802565b60405180910390a1505050505050565b5f82808203610db3576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610dc1600185612226565b818110610dd057610dd061259f565b9050602002810190610de29190612915565b610df390608081019060600161225e565b90505f610dff826112ec565b905073ffffffffffffffffffffffffffffffffffffffff8216610e2957610e263482612226565b90505b5f610e348888611336565b9050610e408888611440565b610e4d8a898989856114ac565b5f82610e58856112ec565b610e629190612226565b905089811015610eac576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f07576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f2873ffffffffffffffffffffffffffffffffffffffff841683836116f7565b505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f5257610f288282611740565b610f28838383610eba565b6020610f6982806122a9565b90501080610f825750602c610f7e82806122a9565b9050115b15610fb9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610fc760608301836122a9565b610fd79161011b9160fb91612951565b610fe091612978565b905080826080013514610a31576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661106a57637939f4245f526004601cfd5b5f60605260405250505050565b6110db6040518060a001604052805f67ffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f8152602001606081525090565b6040805160018082528183019092525f91816020015b604080518082019091525f80825260208201528152602001906001900390816110f15790505090506040518060400160405280866080015173ffffffffffffffffffffffffffffffffffffffff16815260200184815250815f8151811061115a5761115a61259f565b60200260200101819052506040518060a001604052808560400160208101906111839190612290565b67ffffffffffffffff1681526020016111a260c0870160a0880161225e565b73ffffffffffffffffffffffffffffffffffffffff1681526020018560200160208101906111d0919061225e565b73ffffffffffffffffffffffffffffffffffffffff1681525f602082015260400191909152949350505050565b5f5f848460405161120f9291906129b4565b604051809103902090505f8360405160200161122b91906129c3565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018152828252805160209182012060c09a909a1b7fffffffffffffffff000000000000000000000000000000000000000000000000168184015260288301949094526048808301999099528051808303909901895260689091019052508551950194909420949350505050565b610f288383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6117ad565b5f73ffffffffffffffffffffffffffffffffffffffff82161561132e5761132973ffffffffffffffffffffffffffffffffffffffff8316306118d4565b611330565b475b92915050565b6060815f8167ffffffffffffffff81111561135357611353611e32565b60405190808252806020026020018201604052801561137c578160200160208202803683370190505b5090505f5f5b838110156114355786868281811061139c5761139c61259f565b90506020028101906113ae9190612915565b6113bf90608081019060600161225e565b91506113ca826112ec565b8382815181106113dc576113dc61259f565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661142d57348382815181106114155761141561259f565b602002602001018181516114299190612226565b9052505b600101611382565b509095945050505050565b5f5b81811015610f28573683838381811061145d5761145d61259f565b905060200281019061146f9190612915565b905061148160e0820160c083016129d5565b156114a3576114a3611499606083016040840161225e565b82608001356109a3565b50600101611442565b83838383825f5b818110156116dd57368a8a838181106114ce576114ce61259f565b90506020028101906114e09190612915565b90505f6114f0602083018361225e565b90505f611503604084016020850161225e565b90506115a68261151660a08601866122a9565b611524916004915f91612951565b61152d916129ee565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061168e57506115da6115c0606085016040860161225e565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561161357508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561168e575073ffffffffffffffffffffffffffffffffffffffff81165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b156116c5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116cf8e84611907565b8360010193505050506114b3565b50506116ec848484845f611b7a565b505050505050505050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611737576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff821661178d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a3173ffffffffffffffffffffffffffffffffffffffff831682611d91565b73ffffffffffffffffffffffffffffffffffffffff84161561099d5773ffffffffffffffffffffffffffffffffffffffff8316611816576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611889573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118ad9190612a54565b101561099d5761099d73ffffffffffffffffffffffffffffffffffffffff85168483611daa565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61191f611917602083018361225e565b6017903b1190565b611955576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611994576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6119a86115c0606085016040860161225e565b6119b2575f6119b8565b82608001355b90505f6119d36119ce608086016060870161225e565b6112ec565b9050815f03611a0957611a096119ef606086016040870161225e565b6119ff604087016020880161225e565b86608001356112c0565b5f80611a18602087018761225e565b73ffffffffffffffffffffffffffffffffffffffff1684611a3c60a08901896122a9565b604051611a4a9291906129b4565b5f6040518083038185875af1925050503d805f8114611a84576040519150601f19603f3d011682016040523d82523d5f602084013e611a89565b606091505b509150915081611a9c57611a9c81611e28565b5f611ab06119ce6080890160608a0161225e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611ae160208a018a61225e565b611af160608b0160408c0161225e565b611b0160808c0160608d0161225e565b8b60800135898711611b135786611b1d565b611b1d8a88612226565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611b89600182612226565b818110611b9857611b9861259f565b9050602002810190611baa9190612915565b611bbb90608081019060600161225e565b90505f5f5f5f5f5f5f5b88811015611d8157611bd860018a612226565b81108015611be7575088600114155b15611cc2578d8d82818110611bfe57611bfe61259f565b9050602002810190611c109190612915565b611c2190608081019060600161225e565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611cc2578a8181518110611c6857611c6861259f565b6020026020010151611c79876112ec565b611c839190612226565b965073ffffffffffffffffffffffffffffffffffffffff861615611ca7575f611ca9565b895b935083871115611cc257611cc2868d6105db878b612226565b8d8d82818110611cd457611cd461259f565b9050602002810190611ce69190612915565b611cf790606081019060400161225e565b9450611d02856112ec565b925073ffffffffffffffffffffffffffffffffffffffff851615611d26575f611d28565b895b91508183118015611d6557508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611d7957611d79858d6105db8587612226565b600101611bc5565b5050505050505050505050505050565b5f385f3884865af1610a315763b12d13eb5f526004601cfd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611737575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661173757633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611e8357611e83611e32565b60405290565b6040805190810167ffffffffffffffff81118282101715611e8357611e83611e32565b60405160c0810167ffffffffffffffff81118282101715611e8357611e83611e32565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611f1657611f16611e32565b604052919050565b5f5f67ffffffffffffffff841115611f3857611f38611e32565b50601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016602001611f6b81611ecf565b915050828152838383011115611f7f575f5ffd5b828260208301375f602084830101529392505050565b5f82601f830112611fa4575f5ffd5b611fb383833560208501611f1e565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611fdb575f5ffd5b50565b8035611fe981611fba565b919050565b80358015158114611fe9575f5ffd5b5f610140828403121561200e575f5ffd5b612016611e5f565b823581529050602082013567ffffffffffffffff811115612035575f5ffd5b61204184828501611f95565b602083015250604082013567ffffffffffffffff811115612060575f5ffd5b61206c84828501611f95565b60408301525061207e60608301611fde565b606082015261208f60808301611fde565b60808201526120a060a08301611fde565b60a082015260c0828101359082015260e080830135908201526120c66101008301611fee565b6101008201526120d96101208301611fee565b61012082015292915050565b5f60c082840312156120f5575f5ffd5b50919050565b5f5f6040838503121561210c575f5ffd5b823567ffffffffffffffff811115612122575f5ffd5b61212e85828601611ffd565b925050602083013567ffffffffffffffff81111561214a575f5ffd5b612156858286016120e5565b9150509250929050565b5f5f5f5f60608587031215612173575f5ffd5b843567ffffffffffffffff811115612189575f5ffd5b61219587828801611ffd565b945050602085013567ffffffffffffffff8111156121b1575f5ffd5b8501601f810187136121c1575f5ffd5b803567ffffffffffffffff8111156121d7575f5ffd5b8760208260051b84010111156121eb575f5ffd5b60209190910193509150604085013567ffffffffffffffff81111561220e575f5ffd5b61221a878288016120e5565b91505092959194509250565b81810381811115611330577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6020828403121561226e575f5ffd5b8135611fb381611fba565b803567ffffffffffffffff81168114611fe9575f5ffd5b5f602082840312156122a0575f5ffd5b611fb382612279565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122dc575f5ffd5b83018035915067ffffffffffffffff8211156122f6575f5ffd5b60200191503681900382131561230a575f5ffd5b9250929050565b5f67ffffffffffffffff82111561232a5761232a611e32565b5060051b60200190565b5f82601f830112612343575f5ffd5b813561235661235182612311565b611ecf565b8082825260208201915060208360061b860101925085831115612377575f5ffd5b602085015b838110156123c25760408188031215612393575f5ffd5b61239b611e89565b81356123a681611fba565b815260208281013581830152908452929092019160400161237c565b5095945050505050565b5f82601f8301126123db575f5ffd5b81356123e961235182612311565b8082825260208201915060208360051b86010192508583111561240a575f5ffd5b602085015b838110156123c257803567ffffffffffffffff81111561242d575f5ffd5b860160408189037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215612460575f5ffd5b612468611e89565b602082013561247681611fba565b8152604082013567ffffffffffffffff811115612491575f5ffd5b60208184010192505088601f8301126124a8575f5ffd5b6124b789833560208501611f1e565b6020820152808552505060208301925060208101905061240f565b5f602082840312156124e2575f5ffd5b813567ffffffffffffffff8111156124f8575f5ffd5b820160c08185031215612509575f5ffd5b612511611eac565b8135815261252160208301612279565b602082015261253260408301611fde565b604082015260608281013590820152608082013567ffffffffffffffff81111561255a575f5ffd5b61256686828501612334565b60808301525060a082013567ffffffffffffffff811115612585575f5ffd5b612591868285016123cc565b60a083015250949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f60208284031215612609575f5ffd5b815160048110611fb3575f5ffd5b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f60a0830167ffffffffffffffff835116845273ffffffffffffffffffffffffffffffffffffffff602084015116602085015273ffffffffffffffffffffffffffffffffffffffff604084015116604085015260608301516060850152608083015160a0608086015281815180845260c0870191506020830193505f92505b808310156123c257835173ffffffffffffffffffffffffffffffffffffffff815116835260208101516020840152506040820191506020840193506001830192506126dd565b67ffffffffffffffff86168152608060208201525f612746608083018688612617565b8281036040840152612758818661265e565b91505082151560608301529695505050505050565b5f5f6040838503121561277e575f5ffd5b82519150602083015161279081611fba565b809150509250929050565b602081525f6127ae602083018486612617565b949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526128296101608401826127b6565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261286482826127b6565b915050606084015161288e608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516128fd61012085018215159052565b50610120840151801515610140850152509392505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612947575f5ffd5b9190910192915050565b5f5f8585111561295f575f5ffd5b8386111561296b575f5ffd5b5050820193919092039150565b80356020831015611330577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b818382375f9101908152919050565b602081525f611fb3602083018461265e565b5f602082840312156129e5575f5ffd5b611fb382611fee565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612a4d577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612a64575f5ffd5b505191905056fea2646970667358221220ae4a7e4705ec9cbb56f09f4b2906ee51b4b642613101c684628a08cc9606db8764736f6c634300081d0033";
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
