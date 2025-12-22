import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ChainflipFacet, ChainflipFacetInterface } from "../ChainflipFacet";
type ChainflipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ChainflipFacet__factory extends ContractFactory {
    constructor(...args: ChainflipFacetConstructorParams);
    deploy(_chainflipVault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ChainflipFacet>;
    getDeployTransaction(_chainflipVault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ChainflipFacet;
    connect(signer: Signer): ChainflipFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b506040516125fa3803806125fa83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b60805161252d6100cd5f395f8181605d0152818161075a01528181610831015281816108e901528181610a020152610a96015261252d5ff3fe608060405260043610610033575f3560e01c80630ad553b314610037578063786567f71461004c578063ee3314a1146100a8575b5f5ffd5b61004a610045366004611bf1565b6100bb565b005b348015610057575f5ffd5b5061007f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004a6100b6366004611c56565b6102a1565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611d1c565b90508461016b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61026c87608001518860c0015161048a565b610276878761053e565b5047905081811115610296576102965f846102918585611d1c565b610b72565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161031c576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61032c3447611d1c565b90508680610100015161036b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761038e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103c5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610402576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361043f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610453895f01518a60c001518a8a33610ba7565b60c08a0152610462898761053e565b504790508181111561047d5761047d5f846102918585611d1c565b50505f9091555050505050565b805f036104c3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661051c5780341015610518576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61051873ffffffffffffffffffffffffffffffffffffffff8316333084610ceb565b5f61054c8360e00151610d43565b90505f610571846080015173ffffffffffffffffffffffffffffffffffffffff161590565b905060607311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168560a0015173ffffffffffffffffffffffffffffffffffffffff1603610692576105ca8480611d54565b90505f03610604576040517f6e70c56c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61060e8480611d54565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050505060e08601518651919250907ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b6106778780611d54565b604051610685929190611e03565b60405180910390a361074b565b5f8561012001516106a7578560a001516106b7565b6106b76060860160408701611e1e565b905073ffffffffffffffffffffffffffffffffffffffff8116610706576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606083901b1660208201526034016040516020818303038152906040529150505b816107835761078385608001517f00000000000000000000000000000000000000000000000000000000000000008760c00151610dc7565b846101200151156109985761079b6060850185611e3e565b90505f036107d5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84515f906107e66060870187611e3e565b8860a001516040516020016107fe9493929190611f02565b604051602081830303815290604052905082156108d25760c086015173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906307933dd290868561086a60408b0160208c016120a8565b8660808c013561087d60a08e018e611d54565b6040518963ffffffff1660e01b815260040161089f9796959493929190612117565b5f604051808303818588803b1580156108b6575f5ffd5b505af11580156108c8573d5f5f3e3d5ffd5b5050505050610992565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663bbddc2fb858461092060408a0160208b016120a8565b858a608001358c608001518d60c001518d8060a001906109409190611d54565b6040518a63ffffffff1660e01b81526004016109649998979695949392919061217c565b5f604051808303815f87803b15801561097b575f5ffd5b505af115801561098d573d5f5f3e3d5ffd5b505050505b50610b34565b5f6109a66060860186611e3e565b905011156109e0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8115610a7f5760c085015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063dd687345908584610a3b60408a0160208b016120a8565b610a4860a08b018b611d54565b6040518763ffffffff1660e01b8152600401610a68959493929190612207565b5f604051808303818588803b15801561097b575f5ffd5b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166304fc7da08483610acd6040890160208a016120a8565b60808a015160c08b0151610ae460a08c018c611d54565b6040518863ffffffff1660e01b8152600401610b069796959493929190612250565b5f604051808303815f87803b158015610b1d575f5ffd5b505af1158015610b2f573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f185604051610b6391906122af565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b9c57610b978282610df3565b505050565b610b97838383610e60565b5f82808203610be2576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610bf0600185611d1c565b818110610bff57610bff6123c2565b9050602002810190610c1191906123ef565b610c22906080810190606001611e1e565b90505f610c2e82610ece565b905073ffffffffffffffffffffffffffffffffffffffff8216610c5857610c553482611d1c565b90505b5f610c638888610f18565b9050610c6f8888611022565b610c7c8a8989898561108e565b5f82610c8785610ece565b610c919190611d1c565b905089811015610cdb576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9450505050505b95945050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610d3657637939f4245f526004601cfd5b5f60605260405250505050565b5f60018203610d5457506001919050565b61a4b18203610d6557506004919050565b660416edef1601be8203610d7b57506005919050565b6512309ce540018203610d9057506003919050565b6040517f63b7b64100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b610b978383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6112ed565b73ffffffffffffffffffffffffffffffffffffffff8216610e40576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61051873ffffffffffffffffffffffffffffffffffffffff83168261141a565b73ffffffffffffffffffffffffffffffffffffffff8216610ead576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b9773ffffffffffffffffffffffffffffffffffffffff84168383611433565b5f73ffffffffffffffffffffffffffffffffffffffff821615610f1057610f0b73ffffffffffffffffffffffffffffffffffffffff83163061147c565b610f12565b475b92915050565b6060815f8167ffffffffffffffff811115610f3557610f356119c1565b604051908082528060200260200182016040528015610f5e578160200160208202803683370190505b5090505f5f5b8381101561101757868682818110610f7e57610f7e6123c2565b9050602002810190610f9091906123ef565b610fa1906080810190606001611e1e565b9150610fac82610ece565b838281518110610fbe57610fbe6123c2565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661100f5734838281518110610ff757610ff76123c2565b6020026020010181815161100b9190611d1c565b9052505b600101610f64565b509095945050505050565b5f5b81811015610b97573683838381811061103f5761103f6123c2565b905060200281019061105191906123ef565b905061106360e0820160c0830161242b565b156110855761108561107b6060830160408401611e1e565b826080013561048a565b50600101611024565b83838383825f5b818110156112d357368a8a838181106110b0576110b06123c2565b90506020028101906110c291906123ef565b90506111716110d46020830183611e1e565b6110e160a0840184611d54565b6110ef916004915f91612444565b6110f89161246b565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061128957506111a561118b6060830160408401611e1e565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156111f957506111ba6020820182611e1e565b73ffffffffffffffffffffffffffffffffffffffff166111e06040830160208401611e1e565b73ffffffffffffffffffffffffffffffffffffffff1614155b801561128957506112876112136040830160208401611e1e565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff1690565b155b156112c0576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112ca8c826114af565b50600101611095565b50506112e2848484845f611722565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156114145773ffffffffffffffffffffffffffffffffffffffff8316611356576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156113c9573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113ed91906124d1565b10156114145761141473ffffffffffffffffffffffffffffffffffffffff85168483611939565b50505050565b5f385f3884865af16105185763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611473576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6114c76114bf6020830183611e1e565b6017903b1190565b6114fd576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361153c576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61155061118b6060850160408601611e1e565b61155a575f611560565b82608001355b90505f61157b6115766080860160608701611e1e565b610ece565b9050815f036115b1576115b16115976060860160408701611e1e565b6115a76040870160208801611e1e565b8660800135610dc7565b5f806115c06020870187611e1e565b73ffffffffffffffffffffffffffffffffffffffff16846115e460a0890189611d54565b6040516115f29291906124e8565b5f6040518083038185875af1925050503d805f811461162c576040519150601f19603f3d011682016040523d82523d5f602084013e611631565b606091505b50915091508161164457611644816119b7565b5f6116586115766080890160608a01611e1e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861168960208a018a611e1e565b61169960608b0160408c01611e1e565b6116a960808c0160608d01611e1e565b8b608001358987116116bb57866116c5565b6116c58a88611d1c565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611731600182611d1c565b818110611740576117406123c2565b905060200281019061175291906123ef565b611763906080810190606001611e1e565b90505f5f5f5f5f5f5f5b888110156119295761178060018a611d1c565b8110801561178f575088600114155b1561186a578d8d828181106117a6576117a66123c2565b90506020028101906117b891906123ef565b6117c9906080810190606001611e1e565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461186a578a8181518110611810576118106123c2565b602002602001015161182187610ece565b61182b9190611d1c565b965073ffffffffffffffffffffffffffffffffffffffff86161561184f575f611851565b895b93508387111561186a5761186a868d610291878b611d1c565b8d8d8281811061187c5761187c6123c2565b905060200281019061188e91906123ef565b61189f906060810190604001611e1e565b94506118aa85610ece565b925073ffffffffffffffffffffffffffffffffffffffff8516156118ce575f6118d0565b895b9150818311801561190d57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561192157611921858d6102918587611d1c565b60010161176d565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611473575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661147357633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611a1257611a126119c1565b60405290565b5f82601f830112611a27575f5ffd5b813567ffffffffffffffff811115611a4157611a416119c1565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611a8e57611a8e6119c1565b604052818152838201602001851015611aa5575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610dc2575f5ffd5b80358015158114610dc2575f5ffd5b5f6101408284031215611b04575f5ffd5b611b0c6119ee565b823581529050602082013567ffffffffffffffff811115611b2b575f5ffd5b611b3784828501611a18565b602083015250604082013567ffffffffffffffff811115611b56575f5ffd5b611b6284828501611a18565b604083015250611b7460608301611ac1565b6060820152611b8560808301611ac1565b6080820152611b9660a08301611ac1565b60a082015260c0828101359082015260e08083013590820152611bbc6101008301611ae4565b610100820152611bcf6101208301611ae4565b61012082015292915050565b5f60c08284031215611beb575f5ffd5b50919050565b5f5f60408385031215611c02575f5ffd5b823567ffffffffffffffff811115611c18575f5ffd5b611c2485828601611af3565b925050602083013567ffffffffffffffff811115611c40575f5ffd5b611c4c85828601611bdb565b9150509250929050565b5f5f5f5f60608587031215611c69575f5ffd5b843567ffffffffffffffff811115611c7f575f5ffd5b611c8b87828801611af3565b945050602085013567ffffffffffffffff811115611ca7575f5ffd5b8501601f81018713611cb7575f5ffd5b803567ffffffffffffffff811115611ccd575f5ffd5b8760208260051b8401011115611ce1575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611d04575f5ffd5b611d1087828801611bdb565b91505092959194509250565b81810381811115610f12577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611d87575f5ffd5b83018035915067ffffffffffffffff821115611da1575f5ffd5b602001915036819003821315611db5575f5ffd5b9250929050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b602081525f611e16602083018486611dbc565b949350505050565b5f60208284031215611e2e575f5ffd5b611e3782611ac1565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e71575f5ffd5b83018035915067ffffffffffffffff821115611e8b575f5ffd5b6020019150600581901b3603821315611db5575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ed5575f5ffd5b830160208101925035905067ffffffffffffffff811115611ef4575f5ffd5b803603821315611db5575f5ffd5b5f60608201868352606060208401528085825260808401905060808660051b8501019150865f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21893603015b88821015612081577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808786030184528235818112611f8a575f5ffd5b8a0173ffffffffffffffffffffffffffffffffffffffff611faa82611ac1565b16865273ffffffffffffffffffffffffffffffffffffffff611fce60208301611ac1565b16602087015273ffffffffffffffffffffffffffffffffffffffff611ff560408301611ac1565b16604087015261200760608201611ac1565b73ffffffffffffffffffffffffffffffffffffffff1660608701526080818101359087015261203960a0820182611ea2565b60e060a089015261204e60e089018284611dbc565b91505061205d60c08301611ae4565b80151560c08901529150955050602093840193929092019160019190910190611f4e565b50505073ffffffffffffffffffffffffffffffffffffffff85166040850152509050610ce2565b5f602082840312156120b8575f5ffd5b813563ffffffff81168114611e37575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b63ffffffff8816815260c060208201525f61213560c08301896120cb565b63ffffffff88166040840152828103606084015261215381886120cb565b905085608084015282810360a084015261216e818587611dbc565b9a9950505050505050505050565b63ffffffff8a16815261010060208201525f61219c61010083018b6120cb565b63ffffffff8a16604084015282810360608401526121ba818a6120cb565b905087608084015273ffffffffffffffffffffffffffffffffffffffff871660a08401528560c084015282810360e08401526121f7818587611dbc565b9c9b505050505050505050505050565b63ffffffff86168152608060208201525f61222560808301876120cb565b63ffffffff861660408401528281036060840152612244818587611dbc565b98975050505050505050565b63ffffffff8816815260c060208201525f61226e60c08301896120cb565b63ffffffff8816604084015273ffffffffffffffffffffffffffffffffffffffff8716606084015285608084015282810360a084015261216e818587611dbc565b60208152815160208201525f602083015161014060408401526122d66101608401826120cb565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261231182826120cb565b915050606084015161233b608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516123aa61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612421575f5ffd5b9190910192915050565b5f6020828403121561243b575f5ffd5b611e3782611ae4565b5f5f85851115612452575f5ffd5b8386111561245e575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156124ca577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f602082840312156124e1575f5ffd5b5051919050565b818382375f910190815291905056fea2646970667358221220564232cd66128ad2c7aeb07f8439878f17f084d6ff6f270c9534c36e0e59766a64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_chainflipVault";
            readonly type: "address";
            readonly internalType: "contract IChainflipVault";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "CHAINFLIP_VAULT";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IChainflipVault";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaChainflip";
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
            readonly name: "_chainflipData";
            readonly type: "tuple";
            readonly internalType: "struct ChainflipFacet.ChainflipData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "dstToken";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "dstCallReceiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "dstCallSwapData";
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
                readonly name: "gasAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "cfParameters";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaChainflip";
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
            readonly name: "_chainflipData";
            readonly type: "tuple";
            readonly internalType: "struct ChainflipFacet.ChainflipData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "dstToken";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "dstCallReceiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "dstCallSwapData";
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
                readonly name: "gasAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "cfParameters";
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
        readonly name: "EmptyNonEvmAddress";
        readonly inputs: readonly [];
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
    }, {
        readonly type: "error";
        readonly name: "UnsupportedChainflipChainId";
        readonly inputs: readonly [];
    }];
    static createInterface(): ChainflipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ChainflipFacet;
}
export {};
