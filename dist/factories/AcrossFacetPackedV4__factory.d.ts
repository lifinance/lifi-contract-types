import { Signer, ContractFactory, BytesLike, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetPackedV4, AcrossFacetPackedV4Interface } from "../AcrossFacetPackedV4";
type AcrossFacetPackedV4ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetPackedV4__factory extends ContractFactory {
    constructor(...args: AcrossFacetPackedV4ConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<BytesLike>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetPackedV4>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<BytesLike>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetPackedV4;
    connect(signer: Signer): AcrossFacetPackedV4__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b506040516128cd3803806128cd83398101604081905261002e916100b7565b5f80546001600160a01b0319166001600160a01b038381169190911790915583161580610059575081155b8061006b57506001600160a01b038116155b15610089576040516306b7c75960e31b815260040160405180910390fd5b506001600160a01b0390911660805260a0526100f7565b6001600160a01b03811681146100b4575f5ffd5b50565b5f5f5f606084860312156100c9575f5ffd5b83516100d4816100a0565b6020850151604086015191945092506100ec816100a0565b809150509250925092565b60805160a0516127846101495f395f81816102c4015281816110c6015261157201525f818161035001528181610b6e01528181610dcb01528181610f2401528181611094015261151c01526127845ff3fe608060405260043610610109575f3560e01c806372dd147e116100a1578063c93ff54011610071578063e30c397811610057578063e30c3978146102f4578063f2fde38b14610320578063f65039921461033f575f5ffd5b8063c93ff54014610294578063d999984d146102b3575f5ffd5b806372dd147e1461020a57806379b805121461021d5780638da5cb5b1461023c578063c5d60e971461028c575f5ffd5b806336b92404116100dc57806336b92404146101a45780634c478642146101b85780637200b829146101d75780637260352d146101eb575f5ffd5b8063012f27e71461010d5780631458d7ad146101435780631626cde11461016457806323452b9c14610190575b5f5ffd5b348015610118575f5ffd5b5061012c610127366004611de5565b610372565b60405161013a929190611f3c565b60405180910390f35b34801561014e575f5ffd5b5061016261015d36600461208a565b610640565b005b34801561016f575f5ffd5b5061018361017e36600461211c565b610773565b60405161013a9190612166565b34801561019b575f5ffd5b50610162610a4b565b3480156101af575f5ffd5b50610162610b14565b3480156101c3575f5ffd5b506101626101d236600461217f565b610d45565b3480156101e2575f5ffd5b50610162610e1d565b3480156101f6575f5ffd5b5061016261020536600461211c565b610f01565b6101626102183660046121f0565b61107d565b348015610228575f5ffd5b5061012c610237366004611de5565b61120b565b348015610247575f5ffd5b505f546102679073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161013a565b610162611505565b34801561029f575f5ffd5b506101836102ae3660046121f0565b611714565b3480156102be575f5ffd5b506102e67f000000000000000000000000000000000000000000000000000000000000000081565b60405190815260200161013a565b3480156102ff575f5ffd5b506001546102679073ffffffffffffffffffffffffffffffffffffffff1681565b34801561032b575f5ffd5b5061016261033a366004612222565b6117ef565b34801561034a575f5ffd5b506102677f000000000000000000000000000000000000000000000000000000000000000081565b6104066040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b61047d6040518061016001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f6fffffffffffffffffffffffffffffffff1681526020015f81526020015f63ffffffff1681526020015f63ffffffff1681526020015f63ffffffff168152602001606081525090565b60c08310156104b8576040517fca0ad26000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104c6600c6004858761223b565b6104cf91612262565b82526104df604c602c858761223b565b6104e891612262565b73ffffffffffffffffffffffffffffffffffffffff1660a08301526105116094608c858761223b565b61051a9161229f565b60c01c60e0830152610530602c600c858761223b565b61053991612262565b602082015261054c606c604c858761223b565b61055591612262565b6060820152610568608c606c858761223b565b61057191612262565b608082015261058460b46094858761223b565b61058d91612262565b60c08201526105a060b860b4858761223b565b6105a991612305565b60e090811c908201526105c060bc60b8858761223b565b6105c991612305565b60e01c6101008201526105e060c060bc858761223b565b6105e991612305565b60e01c6101208201526105ff8360c0818761223b565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050506101408201525b9250929050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610690576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8673ffffffffffffffffffffffffffffffffffffffff1686866040516106b8929190612378565b5f604051808303815f865af19150503d805f81146106f1576040519150601f19603f3d011682016040523d82523d5f602084013e6106f6565b606091505b5050905080156107385761070b84848461194b565b6040517fdfbe65d77c5440a078a2a1d95803d06b4a5f85b26ba3ec87bc9b421781e8dec1905f90a161076a565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b60606fffffffffffffffffffffffffffffffff8211156107bf576040517f340dabef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f7f36b92404000000000000000000000000000000000000000000000000000000006107ee6020870187612387565b604080517fffffffff000000000000000000000000000000000000000000000000000000009093166020848101919091527fffffffffffffffff0000000000000000000000000000000000000000000000009092166024840152870135602c830152860135604c820152606c8101859052608c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290505f608080870180359186901b9060a0890135906108b29060608b016123c6565b60c01b60405160200161092294939291909384527fffffffffffffffffffffffffffffffff0000000000000000000000000000000092909216602084015260308301527fffffffffffffffff00000000000000000000000000000000000000000000000016605082015260580190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290505f60c0870135610969610100890160e08a016123ed565b60e01b61097e6101208a016101008b016123ed565b60e01b6109936101408b016101208c016123ed565b6040805160208101959095527fffffffff0000000000000000000000000000000000000000000000000000000093841690850152908216604484015260e01b166048820152604c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190529050828282610a1c6101408b018b612410565b604051602001610a30959493929190612488565b60405160208183030381529060405293505050509392505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610a9b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610aea576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f610b23606c604c368461223b565b610b2c91612262565b90505f610b3d609c608c368461223b565b610b46916124ba565b60801c9050610b578233308461197b565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663ad5425c6610ba1602c600c365f61223b565b610baa91612262565b610bb8604c602c365f61223b565b610bc191612262565b85610bd0608c606c365f61223b565b610bd991612262565b86610be860bc609c365f61223b565b610bf191612262565b610bff60c460bc365f61223b565b610c089161229f565b60c01c610c1960e460c4365f61223b565b610c2291612262565b610c3060e860e4365f61223b565b610c3991612305565b60e01c610c4a60ec60e8365f61223b565b610c5391612305565b60e01c610c6460f060ec365f61223b565b610c6d91612305565b60e01c610c7d3660f0815f61223b565b6040518e63ffffffff1660e01b8152600401610ca59d9c9b9a99989796959493929190612566565b5f604051808303815f87803b158015610cbc575f5ffd5b505af1158015610cce573d5f5f3e3d5ffd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339250610d049150600c90506004365f61223b565b610d0d9161229f565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a15050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610d95576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b81811015610e1857610e10838383818110610db457610db46125f0565b9050602002016020810190610dc99190612222565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a3d565b600101610d97565b505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610e6f576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b610f0d8233308461197b565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663ad5425c6604085013560208601358560808801803590879060a08b013590610f709060608d016123c6565b60c08c0135610f866101008e0160e08f016123ed565b8d610100016020810190610f9a91906123ed565b8e610120016020810190610fae91906123ed565b8f806101400190610fbf9190612410565b6040518e63ffffffff1660e01b8152600401610fe79d9c9b9a99989796959493929190612566565b5f604051808303815f87803b158015610ffe575f5ffd5b505af1158015611010573d5f5f3e3d5ffd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13392506110449150506020850185612387565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663ad5425c634604084013560208501357f000000000000000000000000000000000000000000000000000000000000000060808701803590859060a08a0135906111019060608c016123c6565b60c08b01356111176101008d0160e08e016123ed565b6111296101208e016101008f016123ed565b8d61012001602081019061113d91906123ed565b8e80610140019061114e9190612410565b6040518f63ffffffff1660e01b81526004016111769d9c9b9a99989796959493929190612566565b5f604051808303818588803b15801561118d575f5ffd5b505af115801561119f573d5f5f3e3d5ffd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13393506111d4925050506020830183612387565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a150565b61129f6040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b6113166040518061016001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f6fffffffffffffffffffffffffffffffff1681526020015f81526020015f63ffffffff1681526020015f63ffffffff1681526020015f63ffffffff168152602001606081525090565b60f0831015611351576040517fca0ad26000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61135f600c6004858761223b565b61136891612262565b8252611378606c604c858761223b565b61138191612262565b73ffffffffffffffffffffffffffffffffffffffff1660808301526113aa604c602c858761223b565b6113b391612262565b73ffffffffffffffffffffffffffffffffffffffff1660a08301526113dc609c608c858761223b565b6113e5916124ba565b60801c60c08301526113fb60c460bc858761223b565b6114049161229f565b60c01c60e083015261141a602c600c858761223b565b61142391612262565b6020820152611436606c604c858761223b565b61143f91612262565b6040820152611452608c606c858761223b565b61145b91612262565b606082015261146e60bc609c858761223b565b61147791612262565b608082015261148a60e460c4858761223b565b61149391612262565b60c08201526114a660e860e4858761223b565b6114af91612305565b60e090811c908201526114c660ec60e8858761223b565b6114cf91612305565b60e01c6101008201526114e660f060ec858761223b565b6114ef91612305565b60e01c6101208201526105ff8360f0818761223b565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663ad5425c634611550602c600c365f61223b565b61155991612262565b611567604c602c365f61223b565b61157091612262565b7f000000000000000000000000000000000000000000000000000000000000000061159f606c604c365f61223b565b6115a891612262565b346115b7608c606c365f61223b565b6115c091612262565b6115ce6094608c365f61223b565b6115d79161229f565b60c01c6115e860b46094365f61223b565b6115f191612262565b6115ff60b860b4365f61223b565b61160891612305565b60e01c61161960bc60b8365f61223b565b61162291612305565b60e01c61163360c060bc365f61223b565b61163c91612305565b60e01c61164c3660c0815f61223b565b6040518f63ffffffff1660e01b81526004016116749d9c9b9a99989796959493929190612566565b5f604051808303818588803b15801561168b575f5ffd5b505af115801561169d573d5f5f3e3d5ffd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13393506116d59250600c915060049050365f61223b565b6116de9161229f565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1565b60607fc5d60e97000000000000000000000000000000000000000000000000000000006117446020840184612387565b604084013560208501356080860180359060a0880135906117689060608a016123c6565b60c090811b908901356117826101008b0160e08c016123ed565b60e01b6117976101208c016101008d016123ed565b60e01b6117ac6101408d016101208e016123ed565b60e01b6117bd6101408e018e612410565b6040516020016117d99d9c9b9a9998979695949392919061261d565b6040516020818303038152906040529050919050565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461183f576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661188c576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036118db576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b73ffffffffffffffffffffffffffffffffffffffff831661197057610e188282611a69565b610e18838383611ada565b73ffffffffffffffffffffffffffffffffffffffff84166119c8576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611a15576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611a3773ffffffffffffffffffffffffffffffffffffffff8516848484611b48565b50505050565b610e188383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611ba0565b73ffffffffffffffffffffffffffffffffffffffff8216611ab6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611ad673ffffffffffffffffffffffffffffffffffffffff831682611cc7565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216611b27576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e1873ffffffffffffffffffffffffffffffffffffffff84168383611ce0565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716611b9357637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff841615611a375773ffffffffffffffffffffffffffffffffffffffff8316611c09576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611c7c573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611ca09190612737565b1015611a3757611a3773ffffffffffffffffffffffffffffffffffffffff85168483611d29565b5f385f3884865af1611ad65763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611d20576390b8ec185f526004601cfd5b5f603452505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611d20575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611d2057633e3f8f735f526004601cfd5b5f5f83601f840112611db7575f5ffd5b50813567ffffffffffffffff811115611dce575f5ffd5b602083019150836020828501011115610639575f5ffd5b5f5f60208385031215611df6575f5ffd5b823567ffffffffffffffff811115611e0c575f5ffd5b611e1885828601611da7565b90969095509350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b80518252602081015160208301526040810151604083015260608101516060830152608081015160808301525f60a0820151611ec060a08501826fffffffffffffffffffffffffffffffff169052565b5060c082015160c084015260e0820151611ee260e085018263ffffffff169052565b50610100820151611efc61010085018263ffffffff169052565b50610120820151611f1661012085018263ffffffff169052565b50610140820151610160610140850152611f34610160850182611e24565b949350505050565b60408152825160408201525f60208401516101406060840152611f63610180840182611e24565b905060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0848303016080850152611f9e8282611e24565b9150506060850151611fc860a085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060a085015173ffffffffffffffffffffffffffffffffffffffff811660e08501525060c085015161010084015260e085015161012084015261010085015161203861014085018215159052565b50610120850151151561016084015282810360208401526120598185611e70565b95945050505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114612085575f5ffd5b919050565b5f5f5f5f5f5f60a0878903121561209f575f5ffd5b6120a887612062565b9550602087013567ffffffffffffffff8111156120c3575f5ffd5b6120cf89828a01611da7565b90965094506120e2905060408801612062565b92506120f060608801612062565b95989497509295919493608090920135925050565b5f6101608284031215612116575f5ffd5b50919050565b5f5f5f6060848603121561212e575f5ffd5b833567ffffffffffffffff811115612144575f5ffd5b61215086828701612105565b9660208601359650604090950135949350505050565b602081525f6121786020830184611e24565b9392505050565b5f5f60208385031215612190575f5ffd5b823567ffffffffffffffff8111156121a6575f5ffd5b8301601f810185136121b6575f5ffd5b803567ffffffffffffffff8111156121cc575f5ffd5b8560208260051b84010111156121e0575f5ffd5b6020919091019590945092505050565b5f60208284031215612200575f5ffd5b813567ffffffffffffffff811115612216575f5ffd5b611f3484828501612105565b5f60208284031215612232575f5ffd5b61217882612062565b5f5f85851115612249575f5ffd5b83861115612255575f5ffd5b5050820193919092039150565b80356020831015612299577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b165b92915050565b80357fffffffffffffffff00000000000000000000000000000000000000000000000081169060088410156122fe577fffffffffffffffff000000000000000000000000000000000000000000000000808560080360031b1b82161691505b5092915050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156122fe577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505092915050565b81818437505f910190815290565b818382375f9101908152919050565b5f60208284031215612397575f5ffd5b81357fffffffffffffffff00000000000000000000000000000000000000000000000081168114612178575f5ffd5b5f602082840312156123d6575f5ffd5b813567ffffffffffffffff81168114612178575f5ffd5b5f602082840312156123fd575f5ffd5b813563ffffffff81168114612178575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612443575f5ffd5b83018035915067ffffffffffffffff82111561245d575f5ffd5b602001915036819003821315610639575f5ffd5b5f81518060208401855e5f93019283525090919050565b5f6124a561249f612499848a612471565b88612471565b86612471565b838582375f9301928352509095945050505050565b80357fffffffffffffffffffffffffffffffff0000000000000000000000000000000081169060108410156122fe577fffffffffffffffffffffffffffffffff00000000000000000000000000000000808560100360031b1b82161691505092915050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b8d81528c60208201528b60408201528a60608201528960808201528860a082015267ffffffffffffffff881660c08201528660e082015263ffffffff861661010082015263ffffffff851661012082015263ffffffff84166101408201526101806101608201525f6125dd6101808301848661251f565b9f9e505050505050505050505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7fffffffff000000000000000000000000000000000000000000000000000000008e1681527fffffffffffffffff0000000000000000000000000000000000000000000000008d1660048201528b600c8201528a602c82015289604c82015288606c8201527fffffffffffffffff0000000000000000000000000000000000000000000000008816608c8201528660948201527fffffffff00000000000000000000000000000000000000000000000000000000861660b48201527fffffffff00000000000000000000000000000000000000000000000000000000851660b88201527fffffffff00000000000000000000000000000000000000000000000000000000841660bc8201525f6125dd60c08301848661236a565b5f60208284031215612747575f5ffd5b505191905056fea26469706673582212206c77762022930df749a9b7021d2cb3babdec58871561e07b6a7ccd4f9d4a41ac64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePoolV4";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "SPOKEPOOL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePoolV4";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "WRAPPED_NATIVE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaAcrossV4ERC20Packed";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
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
            readonly name: "acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV4.AcrossV4Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaAcrossV4NativePacked";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
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
            readonly name: "acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV4.AcrossV4Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaAcrossV4ERC20Packed";
        readonly inputs: readonly [{
            readonly name: "_parameters";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetPackedV4.PackedParameters";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes8";
                readonly internalType: "bytes8";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositor";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "sendingAssetId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaAcrossV4NativePacked";
        readonly inputs: readonly [{
            readonly name: "_parameters";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetPackedV4.PackedParameters";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes8";
                readonly internalType: "bytes8";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositor";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "executeCallAndWithdraw";
        readonly inputs: readonly [{
            readonly name: "_callTo";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setApprovalForBridge";
        readonly inputs: readonly [{
            readonly name: "tokensToApprove";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4ERC20Min";
        readonly inputs: readonly [{
            readonly name: "_parameters";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetPackedV4.PackedParameters";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes8";
                readonly internalType: "bytes8";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositor";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "sendingAssetId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4ERC20Packed";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4NativeMin";
        readonly inputs: readonly [{
            readonly name: "_parameters";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetPackedV4.PackedParameters";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes8";
                readonly internalType: "bytes8";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositor";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4NativePacked";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "CallExecutedAndFundsWithdrawn";
        readonly inputs: readonly [];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiAcrossTransfer";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes8";
            readonly indexed: false;
            readonly internalType: "bytes8";
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
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "InvalidCalldataLength";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidInputAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "WithdrawFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): AcrossFacetPackedV4Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetPackedV4;
}
export {};
